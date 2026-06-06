from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv

import os
import smtplib
import traceback

from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# Load environment variables
load_dotenv()

app = FastAPI(
    title="ARINSA AI MINDS API",
    version="1.0.0"
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://arinsaaiminds.vercel.app",
        "https://arinsaaiminds.com",
        "https://www.arinsaaiminds.com",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ContactForm(BaseModel):
    name: str
    email: str
    phone: str
    company: str
    message: str


@app.get("/")
def home():
    return {
        "status": "running",
        "service": "ARINSA AI MINDS Backend",
        "version": "1.0.0"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }


@app.post("/contact")
async def contact(form: ContactForm):

    try:

        smtp_email = os.getenv("SMTP_EMAIL")
        smtp_password = os.getenv("SMTP_PASSWORD")
        receiver_email = os.getenv("RECEIVER_EMAIL")
        smtp_server = os.getenv("SMTP_SERVER")
        smtp_port = int(os.getenv("SMTP_PORT"))

        msg = MIMEMultipart()

        msg["From"] = smtp_email
        msg["To"] = receiver_email
        msg["Subject"] = f"New Website Inquiry - {form.name}"

        body = f"""
New Lead From Website

Name: {form.name}

Email: {form.email}

Phone: {form.phone}

Company: {form.company}

Message:
{form.message}
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
