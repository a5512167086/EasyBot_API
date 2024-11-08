from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from config import FRONTEND_URL, EMAIL, EMAIL_APP_PASSWORD
import smtplib


# 使用 smtplib 發送密碼重設電子郵件
def send_reset_email(email: str, token: str):
    reset_link = f"http://{FRONTEND_URL}/reset-password?token={token}"
    email_content = f"""
    您好，

    請點擊以下連結重設您的密碼：{reset_link}

    該連結將在 15 分鐘後過期。
    """

    # 設置郵件信息
    msg = MIMEMultipart()
    msg["From"] = EMAIL
    msg["To"] = email
    msg["Subject"] = "Easybot - 重設您的使用者密碼"
    msg.attach(MIMEText(email_content, "plain"))

    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(EMAIL, EMAIL_APP_PASSWORD)
            server.sendmail(EMAIL, email, msg.as_string())
        print("Password reset email sent successfully.")
    except Exception as e:
        print(f"Failed to send email: {e}")
