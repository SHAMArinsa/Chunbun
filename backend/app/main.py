import os
import uvicorn

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes.contact import router as contact_router

app = FastAPI(
    title="Arinsa AI Minds Contact API"
)

origins = [
    "http://localhost:5173",
    "http://localhost:3000",
    "https://www.arinsaaiminds.com",
    "https://arinsaaiminds.com",
    "https://api.arinsaaiminds.com",
    "https://website-gilt-three-95.vercel.app",
    "https://website-arinsa-ai-minds.vercel.app"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(contact_router)


@app.get("/")
def health():

    return {
        "status": "running"
    }


if __name__ == "__main__":

    port = int(
        os.environ.get(
            "PORT",
            8000
        )
    )

    uvicorn.run(
        "app.main:app",
        host="0.0.0.0",
        port=port
    )