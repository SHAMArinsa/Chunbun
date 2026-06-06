# backend/app/services/email_service.py

import smtplib
import asyncio

from email.message import EmailMessage

from app.core import config


async def send_internal_email(contact_data: dict):

    msg = EmailMessage()

    msg["Subject"] = f"Website Contact Form - {contact_data['subject']}"
    msg["From"] = config.SMTP_USERNAME
    msg["To"] = config.INTERNAL_EMAIL

    body = f"""
New Contact Form Submission

Name: {contact_data['name']}
Email: {contact_data['email']}
Company: {contact_data.get('company', '')}
Phone: {contact_data['phone']}
Subject: {contact_data['subject']}

Message:
{contact_data['message']}
"""

    msg.set_content(body)

    await send_email(msg)


async def send_thank_you_email(
    to_email: str,
    name: str
):

    msg = EmailMessage()

    msg["Subject"] = "Thank You For Contacting Arinsa AI Minds"
    msg["From"] = config.SMTP_USERNAME
    msg["To"] = to_email

    body = f"""
Dear {name},

Thank you for contacting Arinsa AI Minds.

We have successfully received your enquiry.

Our team will review your request and get back to you within 24 business hours.

Regards,
Arinsa AI Minds

"""

    msg.set_content(body)

    await send_email(msg)


async def send_email(msg: EmailMessage):

    loop = asyncio.get_event_loop()

    await loop.run_in_executor(
        None,
        _send_email_sync,
        msg
    )


def _send_email_sync(msg: EmailMessage):

    with smtplib.SMTP(
        config.SMTP_SERVER,
        config.SMTP_PORT
    ) as server:

        server.starttls()

        server.login(
            config.SMTP_USERNAME,
            config.SMTP_PASSWORD
        )

        server.send_message(msg)