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
margin:0;
padding:20px;
background:#F4F7FB;
font-family:Arial, Helvetica, sans-serif;
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

<!-- HEADER -->

<tr>

<td
style="
background:#0A2A66;
padding:25px 35px;
color:#FFFFFF;
"
>

<table width="100%" cellpadding="0" cellspacing="0">

<tr>

<td width="120" align="left">

<img
src="https://www.arinsaaiminds.com/assets/arinsa-logo-CRQZjP3S.png"
alt="ARINSA AI MINDS"
width="90"
style="display:block;"
>

</td>

<td align="center">

<h1 style="
margin:0;
font-size:42px;
font-weight:700;
color:#FFFFFF;
">
Enquiry Received
</h1>

<p style="
margin-top:12px;
font-size:20px;
color:#E8EEFF;
">
Thank you for contacting ARINSA AI MINDS
</p>

</td>

</tr>

</table>

</td>

</tr>

<!-- CONTENT -->

<tr>

<td style="padding:45px;">

<p style="
font-size:16px;
line-height:1.8;
margin-top:0;
">
Dear <strong>{name}</strong>,
</p>

<p style="line-height:1.8;">
Thank you for contacting ARINSA AI MINDS.
We have successfully received your enquiry and our team has started reviewing your request.
</p>

<h2 style="
color:#0A2A66;
font-size:22px;
margin-top:35px;
margin-bottom:25px;
">
Enquiry Information
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
<td>Within 24 Business Hours</td>
</tr>

<tr>
<td><strong>Request Type</strong></td>
<td>Website Contact Form</td>
</tr>

</table>

<hr style="
margin:35px 0;
border:none;
border-top:1px solid #E5EAF2;
">

<h2 style="
color:#0A2A66;
font-size:22px;
margin-bottom:20px;
">
Enquiry Review Process
</h2>

<table width="100%" cellpadding="10">

<tr>
<td width="35">✓</td>
<td>Enquiry Review</td>
</tr>

<tr>
<td>✓</td>
<td>Requirement Assessment</td>
</tr>

<tr>
<td>✓</td>
<td>Internal Evaluation</td>
</tr>

<tr>
<td>✓</td>
<td>Specialist Assignment</td>
</tr>

<tr>
<td>✓</td>
<td>Response Preparation</td>
</tr>

<tr>
<td>✓</td>
<td>Direct Communication</td>
</tr>

</table>

<div style="
margin-top:35px;
padding:25px;
background:#EEF4FF;
border-left:5px solid #2563EB;
border-radius:8px;
">

<h3 style="
margin-top:0;
margin-bottom:10px;
color:#0A2A66;
">
What Happens Next?
</h3>

<p style="
margin:0;
line-height:1.8;
">
Our team will carefully review your enquiry and provide the appropriate response, recommendations, or next steps within 24 business hours.
</p>

</div>

<br>

<p style="line-height:1.8;">
If additional information is required, one of our specialists may contact you for clarification.
</p>

<p style="line-height:1.8;">
If your request is urgent, please feel free to reply directly to this email.
</p>

<p style="line-height:1.8;">
We appreciate your interest in ARINSA AI MINDS and look forward to assisting you.
</p>

<p>
Regards,
</p>

</td>

</tr>

<!-- BUSINESS CARD FOOTER -->

<tr>

<td style="padding:0;">

<table
width="100%"
cellpadding="0"
cellspacing="0"
style="
background:#EAF2FF;
border-top:1px solid #C8D8F5;
"
>

<tr>

<td
width="220"
style="
padding:30px;
text-align:center;
border-right:1px solid #C8D8F5;
"
>

<img
src="https://www.arinsaaiminds.com/assets/arinsa-logo-CRQZjP3S.png"
alt="ARINSA AI MINDS"
width="120"
style="
display:block;
margin:auto;
"
>

</td>

<td
style="
padding:25px;
vertical-align:top;
"
>

<div style="
font-size:34px;
font-weight:700;
color:#00145F;
line-height:1.2;
">
ARINSA AI MINDS
</div>

<div style="
font-size:16px;
font-weight:600;
color:#2350F4;
margin-top:12px;
">
AI • Generative AI • Automation • Digital Solutions
</div>

<div style="
margin-top:20px;
font-size:15px;
line-height:2;
color:#111111;
">

🌐
<a
href="https://www.arinsaaiminds.com"
style="
color:#2350F4;
text-decoration:none;
font-weight:700;
"
>
www.arinsaaiminds.com
</a>

<br>

📍 Kolkata, West Bengal, India

</div>

<div style="
margin-top:18px;
border-top:1px solid #C8D8F5;
padding-top:18px;
">

<div style="
font-size:16px;
font-weight:700;
color:#00145F;
">
We Simplify Your Business & Amplify Your Success
</div>

<div style="
margin-top:8px;
font-size:13px;
font-style:italic;
color:#4A5F85;
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
margin:0;
padding:20px;
background:#F4F7FB;
font-family:Arial, Helvetica, sans-serif;
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

<!-- HEADER -->

<tr>

<td
style="
background:#0A2A66;
padding:25px 35px;
color:#FFFFFF;
"
>

<table
width="100%"
cellpadding="0"
cellspacing="0"
>

<tr>

<td width="120" align="left">

<img
src="https://www.arinsaaiminds.com/assets/arinsa-logo-CRQZjP3S.png"
alt="ARINSA AI MINDS"
width="90"
style="display:block;"
>

</td>

<td align="center">

<h1 style="
margin:0;
font-size:42px;
font-weight:700;
color:#FFFFFF;
">
Quotation Request Received
</h1>

<p style="
margin-top:12px;
font-size:20px;
color:#E8EEFF;
">
Thank you for choosing ARINSA AI MINDS
</p>

</td>

</tr>

</table>

</td>

</tr>

<!-- CONTENT -->

<tr>

<td style="padding:45px;">

<p style="
font-size:16px;
line-height:1.8;
margin-top:0;
">
Dear <strong>{name}</strong>,
</p>

<p style="
line-height:1.8;
">
Thank you for submitting your quotation request.
We have successfully received your request and our team has started reviewing your requirements.
</p>

<h2 style="
color:#0A2A66;
font-size:22px;
margin-top:35px;
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
margin:35px 0;
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
<td width="35">✓</td>
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
margin-top:35px;
padding:25px;
background:#EEF4FF;
border-left:5px solid #2563EB;
border-radius:8px;
">

<h3 style="
margin-top:0;
margin-bottom:10px;
color:#0A2A66;
">
What Happens Next?
</h3>

<p style="
margin:0;
line-height:1.8;
">
Our team will carefully review your requirements and prepare a customized solution proposal, estimated pricing, and implementation roadmap tailored to your business needs.
</p>

</div>

<br>

<p style="line-height:1.8;">
If additional information is required, one of our specialists may contact you for clarification before preparing the final quotation.
</p>

<p style="line-height:1.8;">
We appreciate your interest in ARINSA AI MINDS and look forward to assisting you.
</p>

<p>
Regards,<br>

</p>

</td>

</tr>

<!-- BUSINESS CARD FOOTER -->

<tr>

<td style="padding:0;">

<table
width="100%"
cellpadding="0"
cellspacing="0"
style="
background:#EAF2FF;
border-top:1px solid #C8D8F5;
"
>

<tr>

<td
width="220"
style="
padding:30px;
text-align:center;
border-right:1px solid #C8D8F5;
"
>

<img
src="https://www.arinsaaiminds.com/assets/arinsa-logo-CRQZjP3S.png"
alt="ARINSA AI MINDS"
width="120"
style="
display:block;
margin:auto;
"
>

</td>

<td
style="
padding:25px;
vertical-align:top;
"
>

<div style="
font-size:34px;
font-weight:700;
color:#00145F;
line-height:1.2;
">
ARINSA AI MINDS
</div>

<div style="
font-size:16px;
font-weight:600;
color:#2350F4;
margin-top:12px;
">
AI • Generative AI • Automation • Digital Solutions
</div>

<div style="
margin-top:20px;
font-size:15px;
line-height:2;
color:#111111;
">

🌐
<a
href="https://www.arinsaaiminds.com"
style="
color:#2350F4;
text-decoration:none;
font-weight:700;
"
>
www.arinsaaiminds.com
</a>

<br>

📍 Kolkata, West Bengal, India

</div>

<div style="
margin-top:18px;
border-top:1px solid #C8D8F5;
padding-top:18px;
">

<div style="
font-size:16px;
font-weight:700;
color:#00145F;
">
We Simplify Your Business & Amplify Your Success
</div>

<div style="
margin-top:8px;
font-size:13px;
font-style:italic;
color:#4A5F85;
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