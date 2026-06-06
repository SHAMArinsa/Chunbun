from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv

import os
import smtplib
import traceback

from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# Load Environment Variables
load_dotenv()

app = FastAPI(
    title="ARINSA AI MINDS API",
    version="1.0.0"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change to frontend domain in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request Model
class ContactForm(BaseModel):
    name: str
    email: str
    phone: str
    company: str
    subject: str
    message: str


# Home Route
@app.get("/")
def home():
    return {
        "status": "running",
        "message": "ARINSA AI MINDS API is live"
    }


# Health Check Route
@app.get("/health")
def health():
    return {
        "status": "healthy"
    }


# Contact Form Route
@app.post("/contact")
async def contact(form: ContactForm):

    try:

        print("\n========== NEW CONTACT REQUEST ==========")
        print("Name:", form.name)
        print("Email:", form.email)
        print("Phone:", form.phone)
        print("Company:", form.company)
        print("Subject:", form.subject)

        smtp_email = os.getenv("SMTP_EMAIL")
        smtp_password = os.getenv("SMTP_PASSWORD")
        receiver_email = os.getenv("RECEIVER_EMAIL")
        smtp_server = os.getenv("SMTP_SERVER")
        smtp_port = int(os.getenv("SMTP_PORT", 465))

        # Validate Environment Variables
        if not smtp_email:
            raise Exception("SMTP_EMAIL not found")

        if not smtp_password:
            raise Exception("SMTP_PASSWORD not found")

        if not receiver_email:
            raise Exception("RECEIVER_EMAIL not found")

        if not smtp_server:
            raise Exception("SMTP_SERVER not found")

        # Email Content
        msg = MIMEMultipart()

        msg["From"] = smtp_email
        msg["To"] = receiver_email
        msg["Subject"] = f"New Website Inquiry - {form.name}"

        body = f"""
New Lead From Website

---------------------------------

Name: {form.name}

Email: {form.email}

Phone: {form.phone}

Company: {form.company}

Subject: {form.subject}

Message:
{form.message}

---------------------------------
"""

        msg.attach(MIMEText(body, "plain"))

        print("Connecting to SMTP Server...")

        server = smtplib.SMTP_SSL(
            smtp_server,
            smtp_port
        )

        print("Logging in...")

        server.login(
            smtp_email,
            smtp_password
        )

        print("Sending Email...")

        server.sendmail(
            smtp_email,
            receiver_email,
            msg.as_string()
        )

        server.quit()

        print("Email sent successfully!")

        return {
            "success": True,
            "message": "Message sent successfully"
        }

    except Exception as e:

        print("\n========== ERROR ==========")
        traceback.print_exc()

        return {
            "success": False,
            "message": str(e)
        }
