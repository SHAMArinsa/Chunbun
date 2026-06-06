from fastapi import APIRouter
from fastapi import HTTPException
from fastapi import status

from app.services.email_service import (
    send_internal_email,
    send_thank_you_email
)

router = APIRouter()


def validate_contact_data(data: dict):

    required_fields = [
        "name",
        "email",
        "phone",
        "subject",
        "message"
    ]

    for field in required_fields:

        value = data.get(field)

        if not value or not str(value).strip():

            raise HTTPException(
                status_code=400,
                detail=f"{field} is required"
            )

    if "@" not in data["email"]:
        raise HTTPException(
            status_code=400,
            detail="Invalid email address"
        )

    if len(data["message"]) > 5000:
        raise HTTPException(
            status_code=400,
            detail="Message too long"
        )


@router.post(
    "/contact",
    status_code=status.HTTP_200_OK
)
async def submit_contact(data: dict):

    try:

        validate_contact_data(data)

        await send_internal_email(data)

        await send_thank_you_email(
            data["email"],
            data["name"]
        )

        return {
            "success": True,
            "message": "Message sent successfully"
        }

    except HTTPException:
        raise

    except Exception as e:

        print("\n========== ERROR ==========")
        print(str(e))
        print("===========================\n")

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )