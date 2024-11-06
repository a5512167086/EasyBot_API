from main import app
from fastapi.responses import JSONResponse


@app.exception_handler(Exception)
def global_exception_handler():
    return JSONResponse(
        status_code=400, content={"error_code": "", "error_message": ""}
    )
