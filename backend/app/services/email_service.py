#backend\app\services\email_service.py

import smtplib
import asyncio

from email.message import EmailMessage

from app.core import config


########################################
########### Get in Touch ###############
########################################

async def send_internal_email(contact_data: dict):

    msg = EmailMessage()

    msg["Subject"] = (
        f"Website Contact Form - {contact_data['subject']}"
    )

    msg["From"] = config.SMTP_USERNAME
    msg["To"] = config.INTERNAL_EMAIL

    text_body = f"""
NEW CONTACT FORM SUBMISSION

Name: {contact_data['name']}
Email: {contact_data['email']}
Phone: {contact_data['phone']}
Company: {contact_data.get('company', '')}
Subject: {contact_data['subject']}

Message:
{contact_data['message']}
"""

    msg.set_content(text_body)

    html_body = f"""
<!DOCTYPE html>
<html>

<body style="
font-family:Arial, Helvetica, sans-serif;
background:#F4F7FB;
padding:20px;
color:#333333;
">

<table
width="800"
cellpadding="0"
cellspacing="0"
style="
margin:auto;
background:#FFFFFF;
border:1px solid #DCE5F2;
border-radius:12px;
overflow:hidden;
"
>

<tr>

<td
style="
background:#0A234F;
padding:30px;
text-align:center;
color:#FFFFFF;
"
>

<h1 style="margin:0;font-size:32px;">
Contact Form Submission
</h1>

<p style="
margin-top:10px;
font-size:16px;
opacity:.9;
">
A new enquiry has been received from the website.
</p>

</td>

</tr>

<tr>

<td style="padding:35px;">

<h2 style="color:#0A234F;margin-bottom:15px;">
Contact Information
</h2>

<table width="100%" cellpadding="10">

<tr>
<td width="220"><strong>Full Name</strong></td>
<td>{contact_data['name']}</td>
</tr>

<tr>
<td><strong>Email Address</strong></td>
<td>{contact_data['email']}</td>
</tr>

<tr>
<td><strong>Phone Number</strong></td>
<td>{contact_data['phone']}</td>
</tr>

<tr>
<td><strong>Company Name</strong></td>
<td>{contact_data.get('company', 'N/A')}</td>
</tr>

<tr>
<td><strong>Subject</strong></td>
<td>{contact_data['subject']}</td>
</tr>

</table>

<hr style="margin:25px 0;border:none;border-top:1px solid #E5EAF2;">

<h2 style="color:#0A234F;margin-bottom:15px;">
Message
</h2>

<div
style="
background:#F7F9FC;
padding:20px;
border-left:5px solid #2563EB;
border-radius:8px;
white-space:pre-wrap;
line-height:1.8;
"
>
{contact_data['message']}
</div>

<br>

<div
style="
background:#EEF4FF;
padding:15px;
border-radius:8px;
font-size:14px;
"
>
<strong>Lead Source:</strong> ARINSA AI MINDS Website
</div>

</td>

</tr>

<tr>

<td
style="
background:#0A234F;
padding:20px;
text-align:center;
color:#FFFFFF;
font-size:13px;
"
>

ARINSA AI MINDS | AI • Generative AI • Automation • Digital Solutions

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


#############################
######### Quote #############
#############################

async def send_quote_request_email(quote_data: dict):

    msg = EmailMessage()

    msg["Subject"] = (
        f"New Quote Request - {quote_data['service']}"
    )

    msg["From"] = config.SMTP_USERNAME_TWO
    msg["To"] = config.INTERNAL_EMAIL_TWO

    text_body = f"""
NEW QUOTATION REQUEST

Name: {quote_data['name']}
Email: {quote_data['email']}
Phone: {quote_data['phone']}
Company: {quote_data.get('company', '')}

Service: {quote_data['service']}
Budget: {quote_data['budget']}
Timeline: {quote_data['timeline']}

Project Details:
{quote_data['message']}
"""

    msg.set_content(text_body)

    html_body = f"""
<!DOCTYPE html>
<html>

<body style="
font-family:Arial, Helvetica, sans-serif;
background:#F4F7FB;
padding:20px;
color:#333333;
">

<table
width="800"
cellpadding="0"
cellspacing="0"
style="
margin:auto;
background:#FFFFFF;
border:1px solid #DCE5F2;
border-radius:12px;
overflow:hidden;
"
>

<tr>

<td
style="
background:#0A234F;
padding:30px;
text-align:center;
color:#FFFFFF;
"
>

<h1 style="margin:0;font-size:32px;">
Quotation Request
</h1>

<p style="
margin-top:10px;
font-size:16px;
opacity:.9;
">
A new quotation request has been submitted from the website.
</p>

</td>

</tr>

<tr>

<td style="padding:35px;">

<h2 style="color:#0A234F;margin-bottom:15px;">
Contact Information
</h2>

<table width="100%" cellpadding="10">

<tr>
<td width="220"><strong>Full Name</strong></td>
<td>{quote_data['name']}</td>
</tr>

<tr>
<td><strong>Email Address</strong></td>
<td>{quote_data['email']}</td>
</tr>

<tr>
<td><strong>Phone Number</strong></td>
<td>{quote_data['phone']}</td>
</tr>

<tr>
<td><strong>Company Name</strong></td>
<td>{quote_data.get('company', 'N/A')}</td>
</tr>

</table>

<hr style="margin:25px 0;border:none;border-top:1px solid #E5EAF2;">

<h2 style="color:#0A234F;margin-bottom:15px;">
Project Requirements
</h2>

<table width="100%" cellpadding="10">

<tr>
<td width="220"><strong>Service Required</strong></td>
<td>{quote_data['service']}</td>
</tr>

<tr>
<td><strong>Budget Range</strong></td>
<td>{quote_data['budget']}</td>
</tr>

<tr>
<td><strong>Expected Timeline</strong></td>
<td>{quote_data['timeline']}</td>
</tr>

</table>

<hr style="margin:25px 0;border:none;border-top:1px solid #E5EAF2;">

<h2 style="color:#0A234F;margin-bottom:15px;">
Project Details
</h2>

<div
style="
background:#F7F9FC;
padding:20px;
border-left:5px solid #2563EB;
border-radius:8px;
white-space:pre-wrap;
line-height:1.8;
"
>
{quote_data['message']}
</div>

<br>

<div
style="
background:#EEF4FF;
padding:15px;
border-radius:8px;
font-size:14px;
"
>
<strong>Lead Source:</strong> ARINSA AI MINDS Website
</div>

</td>

</tr>

<tr>

<td
style="
background:#0A234F;
padding:20px;
text-align:center;
color:#FFFFFF;
font-size:13px;
"
>

ARINSA AI MINDS | AI • Generative AI • Automation • Digital Solutions

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

    await send_email_two(msg)


async def send_email_two(msg: EmailMessage):

    loop = asyncio.get_running_loop()

    await loop.run_in_executor(
        None,
        _send_email_two_sync,
        msg
    )


def _send_email_two_sync(msg: EmailMessage):

    with smtplib.SMTP_SSL(
        config.SMTP_SERVER_TWO,
        config.SMTP_PORT_TWO,
        timeout=30
    ) as server:

        server.login(
            config.SMTP_USERNAME_TWO,
            config.SMTP_PASSWORD_TWO
        )

        server.send_message(msg)



async def send_quote_thank_you_email(
    to_email: str,
    name: str
):

    msg = EmailMessage()

    msg["Subject"] = (
        "Quotation Request Received - ARINSA AI MINDS"
    )

    msg["From"] = config.SMTP_USERNAME_TWO
    msg["To"] = to_email

    # Plain Text Version

    text_body = f"""
Dear {name},

Thank you for sending your request for quotation.

We have successfully received your quotation request.

Our team will carefully review your requirements and communicate with you within 3 - 4 business days.

During our review, we may evaluate your project scope, technical requirements, estimated timeline, and business objectives to prepare the most suitable solution and pricing proposal.

If additional information is required, a member of our team may contact you for clarification.

We appreciate your interest in ARINSA AI MINDS and look forward to assisting you.

Regards,
ARINSA AI MINDS
"""

    msg.set_content(text_body)

    html_body = f"""
<!DOCTYPE html>
<html>

<body style="
font-family:Arial, Helvetica, sans-serif;
background:#F4F7FB;
padding:20px;
color:#333333;
">

<table
width="800"
cellpadding="0"
cellspacing="0"
style="
margin:auto;
background:#FFFFFF;
border:1px solid #DCE5F2;
border-radius:12px;
overflow:hidden;
"
>

<tr>

<td
style="
background:#0A2A66;
padding:40px;
text-align:center;
color:#FFFFFF;
"
>

<h1 style="
margin:0;
font-size:42px;
font-weight:700;
">
Quotation Request Received
</h1>

<p style="
margin-top:18px;
font-size:20px;
">
Thank you for choosing ARINSA AI MINDS
</p>

</td>

</tr>

<tr>

<td style="padding:45px;">

<h2 style="
color:#0A2A66;
font-size:22px;
margin-bottom:25px;
">
Request Information
</h2>

<table width="100%" cellpadding="12">

<tr>
<td width="260"><strong>Customer Name</strong></td>
<td>{name}</td>
</tr>

<tr>
<td><strong>Status</strong></td>
<td>Successfully Received</td>
</tr>

<tr>
<td><strong>Response Timeline</strong></td>
<td>3 - 4 Business Days</td>
</tr>

<tr>
<td><strong>Request Type</strong></td>
<td>Quotation Request</td>
</tr>

</table>

<hr style="
margin:30px 0;
border:none;
border-top:1px solid #E5EAF2;
">

<h2 style="
color:#0A2A66;
font-size:22px;
margin-bottom:20px;
">
Quotation Preparation Process
</h2>

<table width="100%" cellpadding="10">

<tr>
<td width="40">✓</td>
<td>Requirements Review</td>
</tr>

<tr>
<td>✓</td>
<td>Solution Assessment</td>
</tr>

<tr>
<td>✓</td>
<td>Budget Evaluation</td>
</tr>

<tr>
<td>✓</td>
<td>Timeline Analysis</td>
</tr>

<tr>
<td>✓</td>
<td>Quotation Preparation</td>
</tr>

<tr>
<td>✓</td>
<td>Final Response</td>
</tr>

</table>

<div style="
margin-top:30px;
padding:25px;
background:#EEF4FF;
border-left:5px solid #2563EB;
border-radius:8px;
">

<strong style="
color:#0A2A66;
font-size:16px;
">
What Happens Next?
</strong>

<p style="
margin-top:12px;
margin-bottom:0;
line-height:1.8;
">
Our team will carefully review your requirements and prepare a customized solution proposal, estimated pricing, and implementation roadmap.
</p>

</div>

<br>

<p style="line-height:1.8;">
If additional information is required, one of our specialists may contact you for clarification before preparing the final quotation.
</p>

<p style="line-height:1.8;">
We appreciate your interest in ARINSA AI MINDS and look forward to assisting you.
</p>

</td>

</tr>

<tr>

<td
style="
background:#0A2A66;
padding:25px;
text-align:center;
color:#FFFFFF;
"
>

<div style="
font-size:24px;
font-weight:700;
">
ARINSA AI MINDS
</div>

<div style="
margin-top:10px;
font-size:14px;
">
AI • Generative AI • Automation • Digital Solutions
</div>

<div style="
margin-top:15px;
font-size:14px;
">
🌐 https://www.arinsaaiminds.com
</div>

<div style="
margin-top:8px;
font-size:13px;
opacity:.85;
">
Kolkata, West Bengal, India
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

    await send_email_two(msg)