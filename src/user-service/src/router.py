from fastapi import APIRouter

router = APIRouter()


@router.post("/user", tags=["users"])
async def create_user():
    return "test"
