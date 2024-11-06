from pydantic import BaseModel, EmailStr


class User(BaseModel):
    username: str
    email: EmailStr


class RegisterRequest(BaseModel):
    username: str
    email: EmailStr
    password: str


class RegisterResponse(BaseModel):
    user_id: str


class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class TokenResponse(BaseModel):
    token: str
    token_type: str


class ErrorResponse(BaseModel):
    error_code: str
    error_message: str
