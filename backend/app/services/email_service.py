# backend/app/services/email_service.py

import smtplib
from email.message import EmailMessage
import asyncio
from app.core import config  # config.py with variables

async def send_internal_email(enquiry: dict):
    msg = EmailMessage()
    msg["Subject"] = f"New Enquiry: {enquiry['subject']}"
    msg["From"] = config.SMTP_USERNAME
    msg["To"] = config.INTERNAL_EMAIL

    body = f"""
You have received a new enquiry:

Name: {enquiry['first_name']} {enquiry['last_name']}
Email: {enquiry['email']}
Phone: {enquiry['phone']}
Subject: {enquiry['subject']}
Message:
{enquiry['message']}
"""
    msg.set_content(body)
    await send_email(msg)

async def send_thank_you_email(to_email: str, first_name: str):
    msg = EmailMessage()
    msg["Subject"] = "Thank you for contacting Arinsa AI Minds"
    msg["From"] = config.SMTP_USERNAME
    msg["To"] = to_email

    body = f"""
Dear {first_name},

Thank you for contacting ARINSA AI MINDS.

We’ve received your message and our team is reviewing it with care. You can expect to hear from us shortly.

In the meantime, feel free to explore more about our AI-driven solutions and innovations.

Warm regards,
Team ARINSA AI MINDS
"We simply your business and amplify your success"
"""
    msg.set_content(body)
    await send_email(msg)

async def send_email(msg: EmailMessage):
    loop = asyncio.get_event_loop()
    await loop.run_in_executor(None, _send_email_sync, msg)

def _send_email_sync(msg: EmailMessage):
    with smtplib.SMTP(config.SMTP_SERVER, config.SMTP_PORT) as server:
        server.starttls()
        server.login(config.SMTP_USERNAME, config.SMTP_PASSWORD)
        server.send_message(msg)
