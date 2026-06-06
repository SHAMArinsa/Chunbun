from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv

import os
import smtplib
import traceback

from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

load_dotenv()

app = FastAPI(
    title="ARINSA AI MINDS API",
    version="1.0.0"
)

# -----------------------------
# CORS CONFIGURATION
# -----------------------------

origins = [
    "https://www.arinsaaiminds.com",
    "https://arinsaaiminds.com",
    "http://localhost:5173",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -----------------------------
# REQUEST MODEL
# -----------------------------

class ContactForm(BaseModel):
    name: str
    email: str
    phone: str
    company: str
    subject: str
    message: str


# -----------------------------
# HOME
# -----------------------------

@app.get("/")
def home():
    return {
        "status": "running",
        "message": "ARINSA AI MINDS API is live"
    }


# -----------------------------
# HEALTH
# -----------------------------

@app.get("/health")
def health():
    return {
        "status": "healthy"
    }


# -----------------------------
# CONTACT FORM
# -----------------------------

@app.post("/contact")
async def contact(form: ContactForm):

    try:

        smtp_email = os.getenv("SMTP_EMAIL")
        smtp_password = os.getenv("SMTP_PASSWORD")
        receiver_email = os.getenv("RECEIVER_EMAIL")
        smtp_server = os.getenv("SMTP_SERVER")
        smtp_port = int(os.getenv("SMTP_PORT", 465))

        msg = MIMEMultipart()

        msg["From"] = smtp_email
        msg["To"] = receiver_email
        msg["Subject"] = f"New Website Inquiry - {form.name}"

        body = f"""
New Lead From Website

--------------------------------

Name: {form.name}

Email: {form.email}

Phone: {form.phone}

Company: {form.company}

Subject: {form.subject}

Message:
{form.message}

--------------------------------
"""

        msg.attach(MIMEText(body, "plain"))

        server = smtplib.SMTP_SSL(
            smtp_server,
            smtp_port
        )

        server.login(
            smtp_email,
            smtp_password
        )

        server.sendmail(
            smtp_email,
            receiver_email,
            msg.as_string()
        )

        server.quit()

        return {
            "success": True,
            "message": "Message sent successfully"
        }

    except Exception as e:

        traceback.print_exc()

        return {
            "success": False,
            "message": str(e)
        }
