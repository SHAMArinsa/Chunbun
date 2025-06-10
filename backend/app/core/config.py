#backend\app\core\config.py

import os
from dotenv import load_dotenv

load_dotenv(dotenv_path=".env")

SMTP_SERVER = os.getenv("SMTP_SERVER")
SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))
SMTP_USERNAME = os.getenv("SMTP_USERNAME")
SMTP_PASSWORD = os.getenv("SMTP_PASSWORD")
INTERNAL_EMAIL = os.getenv("INTERNAL_EMAIL")
