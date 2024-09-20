from fastapi import HTTPException, APIRouter, Header, Request
from typing_extensions import Annotated
from linebot.v3 import WebhookHandler
from linebot.v3.exceptions import InvalidSignatureError
from linebot.v3.messaging import (
    Configuration,
    ApiClient,
    MessagingApi,
    ReplyMessageRequest,
    TextMessage
)
from linebot.v3.webhooks import (
    MessageEvent,
    TextMessageContent
)
from queries import get_line_credentials
from schemas.bot_schema import BotHeaders, BotBodies
router = APIRouter()


@router.get('/')
def get():
    return 'OK'


@router.post("/{user_id}")
def line_webhook(bot_header: Annotated[BotHeaders, Header()], bot_body: BotBodies, user_id: str):
    credentials = get_line_credentials(user_id)
    if not credentials:
        raise HTTPException(status_code=400, detail="Bad Request")

    signature = bot_header.x_line_signature
    if not signature:
        raise HTTPException(
            status_code=400, detail="Missing X-Line-Signature header")

    # Dynamic Setting Line Bot
    configuration = Configuration(
        access_token=credentials["access_token"]
    )
    handler = WebhookHandler(credentials["channel_secret"])

    @handler.add(MessageEvent, message=TextMessageContent)
    def handle_message(event):
        with ApiClient(configuration) as api_client:
            line_bot_api = MessagingApi(api_client)
            line_bot_api.reply_message_with_http_info(
                ReplyMessageRequest(
                    reply_token=event.reply_token,
                    messages=[TextMessage(text=event.message.text)]
                )
            )

    try:
        handler.handle(bot_body.model_dump_json(), signature)
    except InvalidSignatureError:
        raise HTTPException(status_code=400, detail="Invalid signature")
