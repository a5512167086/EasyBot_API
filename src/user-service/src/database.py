from config import DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER
from contextlib import contextmanager
import psycopg2


@contextmanager
def get_db_connection():
    connection = None
    cursor = None
    try:
        connection = psycopg2.connect(
            database=DB_NAME,
            user=DB_USER,
            password=DB_PASSWORD,
            host=DB_HOST,
            port=DB_PORT,
        )
        cursor = connection.cursor()
        yield cursor  # 直接返回 cursor 給上下文
    except (Exception, psycopg2.Error) as error:
        print("Error while connecting to PostgreSQL", error)
    finally:
        if cursor:
            cursor.close()  # 確保光標關閉
            print("Cursor is closed")
        if connection:
            connection.close()  # 確保連接關閉
            print("PostgreSQL connection is closed")
