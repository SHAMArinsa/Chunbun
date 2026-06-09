#backend\app\core\config.py

import os
from dotenv import load_dotenv

load_dotenv()

SMTP_SERVER = os.getenv("SMTP_SERVER")
SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))

SMTP_USERNAME = os.getenv("SMTP_USERNAME")
SMTP_PASSWORD = os.getenv("SMTP_PASSWORD")

INTERNAL_EMAIL = os.getenv("INTERNAL_EMAIL")

# QUOTATION MAILBOX

SMTP_SERVER_TWO = os.getenv("SMTP_SERVER_two")
SMTP_PORT_TWO = int(os.getenv("SMTP_PORT_two", "465"))

SMTP_USERNAME_TWO = os.getenv("SMTP_USERNAME_two")
SMTP_PASSWORD_TWO = os.getenv("SMTP_PASSWORD_two")

INTERNAL_EMAIL_TWO = os.getenv("INTERNAL_EMAIL_two")