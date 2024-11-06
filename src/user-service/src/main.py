from fastapi import FastAPI, status
from router import router
from exception import add_global_exception_handler
from schemas import ErrorResponse
import uvicorn

app = FastAPI(
    responses={status.HTTP_400_BAD_REQUEST: {"model": ErrorResponse}})
add_global_exception_handler(app)
app.include_router(router)


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
