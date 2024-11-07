from fastapi import APIRouter, Depends, Request
from schemas import (
    RegisterRequest,
    LoginRequest,
    TokenResponse,
    RegisterResponse,
    User,
    ResetPasswordRequest,
    ForgotPasswordRequest,
)
from services.user import (
    register,
    login,
    get_user_profile,
    reset_password,
    forgot_password,
)
from utils import verify_jwt_token

router = APIRouter()
privtate_router = APIRouter(dependencies=[Depends(verify_jwt_token)])


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


@router.post("/user/forgot_password", tags=["users"])
async def forgot_user_password(body: ForgotPasswordRequest):
    user_email = body.email
    forgot_password(user_email)


@privtate_router.get("/user/me", tags=["users"], response_model=User)
async def get_user(request: Request):
    user_id = request.state.payload["sub"]
    user_profile = get_user_profile(user_id)
    return user_profile


@privtate_router.post("/user/change_password", tags=["users"])
async def change_password():
    return "ok"


@privtate_router.post("/user/reset_password", tags=["users"])
async def reset_user_password(request: Request, body: ResetPasswordRequest):
    update_user_id = request.state.payload["sub"]
    new_password = body.new_password
    reset_password(update_user_id, new_password)
