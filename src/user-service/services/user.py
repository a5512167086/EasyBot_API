from schemas import (
    RegisterRequest,
    LoginRequest,
    ForgotPasswordRequest,
    OAuthLoginRequest,
    OAuth,
)
from utils import (
    hash_password,
    create_jwt_token,
    google_code_to_token,
    get_google_oauth_info,
    generate_random_password,
)
from commands.user import create_user, update_user_password
from commands.oauth import create_oauth
from queries.user import (
    get_user_by_email_and_password,
    get_user_by_id,
    get_user_by_email,
)
from services.mail import send_reset_email
from exception import GlobalErrorException
from datetime import timedelta


def get_user_profile(user_id: str):
    user_profile = get_user_by_id(user_id)
    if user_profile == "USER_NOT_EXISTS":
        raise GlobalErrorException(
            error_code="USER_NOT_EXISTS",
            error_message="Can't found user by email.",
        )

    return user_profile


def login(user: LoginRequest):
    login_user_data = get_user_by_email_and_password(user)

    if login_user_data == "USER_NOT_EXISTS":
        raise GlobalErrorException(
            error_code="USER_NOT_EXISTS",
            error_message="Can't found user by email.",
        )
    if login_user_data == "PASSWORD_NOT_MATCH":
        raise GlobalErrorException(
            error_code="PASSWORD_NOT_MATCH",
            error_message="Password is incorrect.",
        )

    login_user_id, login_user_email = (
        login_user_data["user_id"],
        login_user_data["email"],
    )

    access_token = create_jwt_token(
        data={"sub": login_user_id, "email": login_user_email}
    )

    return {"token": access_token, "token_type": "bearer"}


def oauth_login(oauth: OAuthLoginRequest):
    provider = oauth.provider
    if provider == "google":
        code = oauth.code
        google_oauth_response = google_code_to_token(code)
        if google_oauth_response == "OAUTH_FAILED":
            raise GlobalErrorException(
                error_code="OAUTH_FAILED",
                error_message="Failed to authenticate with Google OAuth.",
            )
        google_user_info = get_google_oauth_info(google_oauth_response["access_token"])
        if google_user_info == "USER_INFO_REQUEST_FAILED":
            raise GlobalErrorException(
                error_code="OAUTH_FAILED",
                error_message="Failed to authenticate with Google OAuth.",
            )
        google_oauth_id = google_user_info["id"]
        google_email = google_user_info["email"]
        google_username = google_user_info["name"]
        user_info = get_user_by_email(google_email)
        if user_info == "USER_NOT_EXISTS":
            new_user = RegisterRequest(
                **{
                    "username": google_username,
                    "email": google_email,
                    "password": hash_password(generate_random_password()),
                }
            )
            new_user_id = create_user(new_user)
            oauth = OAuth(
                **{
                    "user_id": new_user_id,
                    "oauth_provider": provider,
                    "oauth_user_id": google_oauth_id,
                }
            )
            create_oauth(oauth)
        elif user_info:
            raise GlobalErrorException(
                error_code="USER_EXISTED",
                error_message="User already exists, please login.",
            )


def register(user: RegisterRequest):
    new_user = RegisterRequest(
        **{
            "username": user.username,
            "email": user.email,
            "password": hash_password(user.password),
        }
    )

    new_user_id = create_user(new_user)

    if new_user_id == "DUPLICATE_EMAIL":
        raise GlobalErrorException(
            error_code="USER_ALREADY_EXISTS",
            error_message="The provided email is already registered.",
        )
    elif new_user_id is None:
        raise GlobalErrorException(
            error_code="USER_CREATION_FAILED",
            error_message="An error occurred while creating the user.",
        )

    return {"user_id": new_user_id}


def forgot_password(user_email: ForgotPasswordRequest):
    forgot_user_data = get_user_by_email(user_email)
    if forgot_user_data == "USER_NOT_EXISTS":
        raise GlobalErrorException(
            error_code="USER_NOT_EXISTS",
            error_message="Can't found user by email.",
        )
    forgot_user_id = forgot_user_data["user_id"]
    forgot_user_email = forgot_user_data["email"]
    token = create_jwt_token(
        data={"sub": forgot_user_id, "email": forgot_user_email},
        expires_delta=timedelta(minutes=15),
    )
    send_reset_email(user_email, token)


def reset_password(user_id: str, new_password: str):
    update_user_data = get_user_by_id(user_id)
    if update_user_data == "USER_NOT_EXISTS":
        raise GlobalErrorException(
            error_code="USER_NOT_EXISTS",
            error_message="Can't found user by email.",
        )

    hashed_password = hash_password(new_password)
    update_user_password(user_id, hashed_password)
