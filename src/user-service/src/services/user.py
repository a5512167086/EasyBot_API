from fastapi import HTTPException
from schemas import RegisterRequest, LoginRequest
from utils import hash_password, create_access_token
from commands.user import create_user, get_user_by_email_and_password
from exception import GlobalErrorException


def login(user: LoginRequest):
    login_user_data = get_user_by_email_and_password(user)

    if login_user_data is None:
        raise GlobalErrorException(
            error_code="USER_NOT_EXISTS", error_message="Can't found user by email.",)
    if login_user_data == "PASSWORD_NOT_MATCH":
        raise GlobalErrorException(
            error_code="PASSWORD_NOT_MATCH", error_message="Password is incorrect.",)

    login_user_id = login_user_data["user_id"]
    access_token = create_access_token(data={"sub": login_user_id})

    return {"token": access_token, "token_type": "bearer"}


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
            error_code="USER_ALREADY_EXISTS", error_message="The provided email is already registered.",)
    elif new_user_id is None:
        raise GlobalErrorException(
            error_code="USER_CREATION_FAILED", error_message="An error occurred while creating the user.",)

    return {"user_id": new_user_id}
