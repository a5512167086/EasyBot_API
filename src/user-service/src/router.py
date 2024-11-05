from fastapi import APIRouter
from schemas import UserRequest
from commands.user import create_new_user

router = APIRouter()


@router.post("/user", tags=["users"])
async def create_user(user: UserRequest):
    user_id = create_new_user(user)
    return user_id
