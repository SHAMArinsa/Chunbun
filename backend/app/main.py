#backend\app\main.py

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes import enquiries

app = FastAPI(title="Arinsa AI Minds Enquiry API")

# CORS - allow frontend localhost:3000 (adjust if deployed)
origins = ["https://www.arinsaaiminds.com",
    "https://arinsaaiminds.com",
    "http://localhost:5173",
    # add other allowed origins here
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(enquiries.router, prefix="/api/v1/enquiries", tags=["Enquiries"])

@app.get("/")
async def root():
    return {"message": "Welcome to Arinsa AI Minds Enquiry API"}

