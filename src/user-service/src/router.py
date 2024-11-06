from fastapi import APIRouter
from schemas import RegisterRequest, LoginRequest
from services.user import register, login

router = APIRouter()


@router.post("/user/login", tags=["users"])
async def login_user(user: LoginRequest):
    jwt = login(user)
    return jwt


@router.post("/user/register", tags=["users"])
async def register_user(user: RegisterRequest):
    new_user_id = register(user)
    return new_user_id
