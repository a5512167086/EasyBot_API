from config import DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER
from contextlib import contextmanager
import psycopg2


@contextmanager
def get_db_connection():
    connection = None
    try:
        connection = psycopg2.connect(
            database=DB_NAME,
            user=DB_USER,
            password=DB_PASSWORD,
            host=DB_HOST,
            port=DB_PORT,
        )
        yield connection  # 返回 connection，方便進行提交操作
    except (Exception, psycopg2.Error) as error:
        print("Error while connecting to PostgreSQL:", error)
        raise
    finally:
        if connection:
            connection.close()
            print("PostgreSQL connection is closed")
