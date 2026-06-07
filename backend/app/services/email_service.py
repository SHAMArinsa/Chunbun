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


async def send_email(msg: EmailMessage):

    loop = asyncio.get_running_loop()

    await loop.run_in_executor(
        None,
        _send_email_sync,
        msg
    )


def _send_email_sync(msg: EmailMessage):

    print("\n========== SMTP DEBUG ==========")
    print("SMTP_SERVER:", config.SMTP_SERVER)
    print("SMTP_PORT:", config.SMTP_PORT)
    print("SMTP_USERNAME:", config.SMTP_USERNAME)
    print("INTERNAL_EMAIL:", config.INTERNAL_EMAIL)
    print("================================\n")

    try:

        with smtplib.SMTP_SSL(
            config.SMTP_SERVER,
            config.SMTP_PORT,
            timeout=30
        ) as server:

            print("✓ SSL Connection Established")

            server.login(
                config.SMTP_USERNAME,
                config.SMTP_PASSWORD
            )

            print("✓ Login Successful")

            server.send_message(msg)

            print("✓ Email Sent Successfully")

    except Exception as e:

        print("\n========== SMTP ERROR ==========")
        print(type(e).__name__)
        print(str(e))
        print("================================\n")

        raise



async def send_thank_you_email(
    to_email: str,
    name: str
):

    msg = EmailMessage()

    msg["Subject"] = "Thank You For Contacting Arinsa AI Minds"
    msg["From"] = config.SMTP_USERNAME
    msg["To"] = to_email

    # Plain Text Version
    text_body = f"""
Dear {name},

Thank you for contacting Arinsa AI Minds.

We have successfully received your enquiry.

Our team will review your request and get back to you within 24 business hours.

If your request is urgent, please feel free to reply to this email.

Regards,
Arinsa AI Minds
"""

    msg.set_content(text_body)

    # HTML Version
    html_body = f"""
<!DOCTYPE html>
<html>

<body style="
font-family:Arial, Helvetica, sans-serif;
color:#333333;
line-height:1.7;
background-color:#ffffff;
padding:10px;
">

<p>Dear {name},</p>

<p>
Thank you for contacting
<strong>Arinsa AI Minds</strong>.
</p>

<p>
We have successfully received your enquiry.
</p>

<p>
Our team will review your request and get back to you within
<strong>24 business hours</strong>.
</p>

<p>
If your request is urgent, please feel free to reply to this email.
</p>

<br>

<p>
Regards,
</p>

<table cellpadding="0" cellspacing="0" border="0"
bgcolor="#EAF2FF"
style="
font-family:Arial, Helvetica, sans-serif;
background:#EAF2FF;
border:1px solid #AFC4E8;
border-radius:10px;
padding:20px;
max-width:700px;
width:100%;
">

<tr>

<td style="
width:180px;
padding-right:20px;
border-right:3px solid #2350F4;
text-align:center;
vertical-align:middle;
">

<img
src="https://www.arinsaaiminds.com/assets/arinsa-logo-CRQZjP3S.png"
alt="ARINSA AI MINDS"
width="150"
style="display:block;margin:auto;"
>

</td>

<td style="
padding-left:20px;
vertical-align:top;
">

<div style="
font-size:26px;
font-weight:700;
color:#00145F;
line-height:1.2;
">
ARINSA AI MINDS
</div>

<div style="
font-size:15px;
font-weight:600;
color:#2350F4;
margin-top:10px;
line-height:1.5;
">
AI • Generative AI • Automation • Digital Solutions
</div>

<div style="
margin-top:18px;
font-size:15px;
line-height:2;
color:#111111;
">

<span style="
color:#2350F4;
font-weight:600;
">
🌐
<a
href="https://www.arinsaaiminds.com"
style="
color:#2350F4;
text-decoration:none;
font-weight:700;
">
www.arinsaaiminds.com
</a>
</span>

<br>

📍 Kolkata, West Bengal, India

</div>

<div style="
margin-top:15px;
border-top:1px solid #AFC4E8;
padding-top:15px;
">

<div style="
font-size:15px;
color:#00145F;
font-weight:700;
">
We Simplify Your Business & Amplify Your Success
</div>

<div style="
margin-top:8px;
font-size:13px;
color:#4A5F85;
font-style:italic;
">
Innovation begins when intelligence meets imagination.
</div>

</div>

<div style="
margin-top:18px;
font-size:12px;
color:#4A5F85;
">
© ARINSA AI MINDS Pvt. Ltd. | All Rights Reserved
</div>

</td>

</tr>

</table>

</body>
</html>
"""

    msg.add_alternative(
        html_body,
        subtype="html"
    )

    await send_email(msg)
