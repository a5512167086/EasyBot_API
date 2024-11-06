from fastapi import APIRouter
from schemas import RegisterRequest, LoginRequest, TokenResponse, RegisterResponse
from services.user import register, login
from exception import GlobalErrorException

router = APIRouter()


@router.get("/user/me", tags=["users"])
async def get_user():
    return "ok"


@router.post(
    "/user/login",
    tags=["users"],
    response_model=TokenResponse,
)
async def login_user(user: LoginRequest):
    jwt = login(user)
    return jwt


@router.post("/auth/oauth_login", tags=["auth"])
async def oauth_login():
    return "ok"


@router.post("/user/register", tags=["users"], response_model=RegisterResponse)
async def register_user(user: RegisterRequest):
    new_user_id = register(user)
    return new_user_id


@router.post("/user/change_password", tags=["users"])
async def change_password(user):
    return "ok"


@router.post("/user/forgot_password", tags=["users"])
async def forgot_user_password(user):
    return "ok"


@router.post("/user/reset_password", tags=["users"])
async def reset_password(token: str, new_password: str):
    return reset_password(token, new_password)
