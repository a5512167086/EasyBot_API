from fastapi import FastAPI, status
from fastapi.middleware.cors import CORSMiddleware
from router import router, privtate_router
from exception import add_global_exception_handler
from schemas import ErrorResponse
from config import FRONTEND_URL
import uvicorn

origins = [FRONTEND_URL]


app = FastAPI(responses={status.HTTP_400_BAD_REQUEST: {"model": ErrorResponse}})
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
add_global_exception_handler(app)
app.include_router(router)
app.include_router(privtate_router)


if __name__ == "__main__":
    uvicorn.run("main:app", port=8000, reload=True)
