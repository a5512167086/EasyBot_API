from database import get_db_connection
from schemas import UserRequest


def create_new_user(user: UserRequest):
    print(user)
    try:
        with get_db_connection() as cursor:
            cursor.execute(
                "SELECT fs_insert_user(%s, %s, %s);",
                (user.username, user.email, user.password),
            )
            user = cursor.fetchone()
            print("User:", user)
            return user
    except Exception as e:
        print("Failed to create new user:", str(e))
        return None
