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

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
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
    return {"status": "running"}


@app.post("/contact")
async def contact(form: ContactForm):

    try:
        print("\n========== NEW CONTACT REQUEST ==========")
        print("Name:", form.name)
        print("Email:", form.email)
        print("Phone:", form.phone)
        print("Company:", form.company)

        smtp_email = os.getenv("SMTP_EMAIL")
        smtp_password = os.getenv("SMTP_PASSWORD")
        receiver_email = os.getenv("RECEIVER_EMAIL")
        smtp_server = os.getenv("SMTP_SERVER")
        smtp_port = int(os.getenv("SMTP_PORT"))

        print("SMTP Email:", smtp_email)
        print("Receiver:", receiver_email)

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

        print("Connecting to SMTP server...")

        server = smtplib.SMTP_SSL(
            smtp_server,
            smtp_port
        )

        print("Logging in...")

        server.login(
            smtp_email,
            smtp_password
        )

        print("Sending email...")

        server.sendmail(
            smtp_email,
            receiver_email,
            msg.as_string()
        )

        print("Email sent successfully!")

        server.quit()

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