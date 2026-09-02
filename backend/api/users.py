from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db

router = APIRouter(prefix="/api/users", tags=["users"])

@router.post("/")
def create_user(name: str, age: int, language: str, db: Session = Depends(get_db)):
    # This is a mock implementation for the MVP
    return {"message": "User created", "user": {"name": name, "age": age, "language": language}}

@router.get("/{user_id}")
def get_user(user_id: int, db: Session = Depends(get_db)):
    # Mock implementation
    return {"user_id": user_id, "name": "Test User"}
