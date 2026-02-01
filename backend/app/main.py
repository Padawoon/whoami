from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from pydantic import BaseModel, EmailStr, Field
from typing import List, Optional
from .database import engine, get_db, Base
from . import models
import logging

# Setup logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Create tables
models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="Business Card API")

# CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For development; in production list specific domains
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class MessageCreate(BaseModel):
    name: str = Field(..., max_length=100)
    email: EmailStr
    subject: Optional[str] = Field(None, max_length=200)
    message: str = Field(..., max_length=2000)

class MessageResponse(MessageCreate):
    id: int
    created_at: str

    class Config:
        from_attributes = True

@app.get("/")
def read_root():
    return {"status": "ok", "message": "Business Card API is running"}

@app.post("/messages/", response_model=MessageResponse)
def create_message(message: MessageCreate, db: Session = Depends(get_db)):
    try:
        db_message = models.Message(
            name=message.name,
            email=message.email,
            subject=message.subject,
            message=message.message
        )
        db.add(db_message)
        db.commit()
        db.refresh(db_message)
        
        logger.info(f"New message received from {message.email}")
        
        # Pydantic will handle the conversion back to the response model
        return db_message
    except Exception as e:
        logger.error(f"Error creating message: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")
