from pydantic import BaseModel


class BotHeaders(BaseModel):
    x_line_signature: str


class BotBodies(BaseModel):
    destination: str
    events: list
