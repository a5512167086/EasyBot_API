from fastapi import FastAPI, status
from router import router, privtate_router
from exception import add_global_exception_handler
from schemas import ErrorResponse
import uvicorn

app = FastAPI(
    responses={status.HTTP_400_BAD_REQUEST: {"model": ErrorResponse}})
add_global_exception_handler(app)
app.include_router(router)
app.include_router(privtate_router)


if __name__ == "__main__":
    uvicorn.run("main:app", port=8000, reload=True)