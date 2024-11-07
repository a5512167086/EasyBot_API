import smtplib
import smtplib
from email.mime.text import MIMEText
from config import FRONTEND_URL
from email.mime.multipart import MIMEMultipart


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
    msg["From"] = ""
    msg["To"] = email
    msg["Subject"] = "Easybot - 重設您的使用者密碼"
    msg.attach(MIMEText(email_content, "plain"))

    try:
        with smtplib.SMTP("smtp.your-email-provider.com", 587) as server:
            server.starttls()
            server.login("your_smtp_username", "your_smtp_password")
            server.sendmail('', email, msg.as_string())
        print("Password reset email sent successfully.")
    except Exception as e:
        print(f"Failed to send email: {e}")
