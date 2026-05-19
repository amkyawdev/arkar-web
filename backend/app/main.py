from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import auth, projects

app = FastAPI(
    title="ARKAR API",
    description="Backend API for ARKAR Portfolio Platform",
    version="1.0.0"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(auth.router, prefix="/api/auth", tags=["Authentication"])
app.include_router(projects.router, prefix="/api/projects", tags=["Projects"])

@app.get("/")
def read_root():
    return {"message": "ARKAR API", "status": "running"}

@app.get("/health")
def health_check():
    return {"status": "healthy"}