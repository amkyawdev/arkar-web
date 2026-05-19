from fastapi import APIRouter, HTTPException, Header
from typing import Optional

router = APIRouter()

# Mock user data - replace with database query
MOCK_USERS = {
    "user123": {
        "id": "user123",
        "email": "user@example.com",
        "name": "Test User",
        "role": "admin"
    }
}

@router.get("/me")
async def get_current_user(authorization: Optional[str] = Header(None)):
    """Get current authenticated user"""
    if not authorization:
        raise HTTPException(status_code=401, detail="Not authenticated")
    
    # In production, verify Firebase token here
    # For now, return mock user
    return MOCK_USERS["user123"]

@router.post("/verify")
async def verify_token(token: str):
    """Verify Firebase token"""
    # In production, verify Firebase token with Firebase Admin SDK
    return {"valid": True, "user_id": "user123"}