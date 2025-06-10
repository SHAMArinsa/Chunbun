import os
import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes import enquiries

app = FastAPI(title="Arinsa AI Minds Enquiry API")

# CORS configuration
origins = [
    "https://www.arinsaaiminds.com",
    "https://arinsaaiminds.com",
    "https://website-gilt-three-95.vercel.app/"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,   # set to False if not using cookies/sessions
    allow_methods=["*"],
    allow_headers=["*"],
)


# Include your enquiry router
app.include_router(enquiries.router, prefix="/api/v1/enquiries", tags=["Enquiries"])

@app.get("/")
async def root():
    return {"message": "Welcome to Arinsa AI Minds Enquiry API"}

# Required for Render: dynamic port + 0.0.0.0
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run("app.main:app", host="0.0.0.0", port=port)
