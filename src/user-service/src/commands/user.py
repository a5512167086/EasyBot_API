from database import get_db_connection
from schemas import RegisterRequest, LoginRequest
import bcrypt
import psycopg2
import psycopg2.extras


def get_user_by_email_and_password(user: LoginRequest):
    try:
        with get_db_connection() as connection:
            with connection.cursor(
                cursor_factory=psycopg2.extras.RealDictCursor
            ) as cursor:
                cursor.execute(
                    "SELECT user_id, password FROM users WHERE email = %s", [user.email]
                )
                user_data = cursor.fetchone()

                if not user_data:
                    return "USER_NOT_EXISTS"

                hashed_password = user_data["password"]

                if not bcrypt.checkpw(
                    user.password.encode("utf-8"), hashed_password.encode("utf-8")
                ):
                    return "PASSWORD_NOT_MATCH"
                return user_data
    except Exception:
        return None


def create_user(user: RegisterRequest):
    try:
        with get_db_connection() as connection:
            with connection.cursor(
                cursor_factory=psycopg2.extras.RealDictCursor
            ) as cursor:
                cursor.execute(
                    "SELECT fs_insert_user(%s, %s, %s);",
                    [user.username, user.email, user.password],
                )
                user_data = cursor.fetchone()
                connection.commit()
                return user_data["fs_insert_user"]
    except psycopg2.Error as error:
        error_message = error.diag.message_primary
        if "EMail已存在" in error_message:
            return "DUPLICATE_EMAIL"

        return None
