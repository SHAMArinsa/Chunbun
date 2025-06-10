from fastapi import APIRouter, HTTPException, status, Request

from app.services.email_service import send_internal_email, send_thank_you_email

router = APIRouter()

def validate_enquiry_data(data: dict):
    # Basic required fields check
    required_fields = ["first_name", "last_name", "email", "phone", "subject", "message"]
    for field in required_fields:
        value = data.get(field)
        if not value or not isinstance(value, str) or not value.strip():
            raise HTTPException(status_code=400, detail=f"{field} is required and must be a non-empty string")

    # Basic email format check (very simple, can be improved)
    if "@" not in data["email"] or "." not in data["email"]:
        raise HTTPException(status_code=400, detail="Invalid email format")

    # Phone length check
    phone = data["phone"].strip()
    if len(phone) < 10 or len(phone) > 15:
        raise HTTPException(status_code=400, detail="Phone number must be between 10 and 15 characters")

    # Message max length check
    if len(data["message"]) > 1000:
        raise HTTPException(status_code=400, detail="Message must not exceed 1000 characters")

@router.post("/", status_code=status.HTTP_201_CREATED)
async def submit_enquiry(request: Request):
    data = await request.json()
    
    # Validate incoming data
    validate_enquiry_data(data)

    try:
        # Now you can pass data as a dict to your email functions
        await send_internal_email(data)
        await send_thank_you_email(data["email"], data["first_name"])
        return {"detail": "Enquiry submitted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error sending emails: {str(e)}")
