from fastapi import APIRouter, HTTPException
from typing import List, Optional
from pydantic import BaseModel

router = APIRouter()

# Project model
class Project(BaseModel):
    id: Optional[str] = None
    title: str
    description: str
    image: str
    tools: List[str]
    link: str
    github: Optional[str] = None

# Mock projects data
PROJECTS = [
    {
        "id": "1",
        "title": "ARKAR - AI Portfolio Platform",
        "description": "Full-stack personal portfolio platform with AI-powered analytics and glassmorphic UI. Features Firebase auth, Supabase database, and real-time project updates.",
        "image": "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
        "tools": ["Next.js", "FastAPI", "Supabase", "Firebase"],
        "link": "https://arkar.dev",
        "github": "https://github.com/yourname/arkar",
    },
    {
        "id": "2",
        "title": "Neural Design System",
        "description": "Open-source design system with 50+ reusable components, dark mode support, and accessible Tailwind-based utilities.",
        "image": "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
        "tools": ["React", "Tailwind CSS", "Storybook"],
        "link": "#",
        "github": "https://github.com/yourname/neural-ds",
    },
    {
        "id": "3",
        "title": "Motion Analytics Dashboard",
        "description": "Real-time analytics platform with interactive visualizations. Built with React, D3.js, and WebSocket for live data streaming.",
        "image": "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
        "tools": ["React", "D3.js", "WebSocket", "Vercel"],
        "link": "#",
        "github": "https://github.com/yourname/motion-analytics",
    },
]

@router.get("/")
async def get_projects() -> List[dict]:
    """Get all projects"""
    return PROJECTS

@router.get("/{project_id}")
async def get_project(project_id: str) -> dict:
    """Get a single project by ID"""
    for project in PROJECTS:
        if project["id"] == project_id:
            return project
    raise HTTPException(status_code=404, detail="Project not found")

@router.post("/")
async def create_project(project: Project) -> dict:
    """Create a new project"""
    new_project = {
        "id": str(len(PROJECTS) + 1),
        **project.dict()
    }
    PROJECTS.append(new_project)
    return new_project

@router.put("/{project_id}")
async def update_project(project_id: str, project: Project) -> dict:
    """Update a project"""
    for i, p in enumerate(PROJECTS):
        if p["id"] == project_id:
            PROJECTS[i] = {"id": project_id, **project.dict()}
            return PROJECTS[i]
    raise HTTPException(status_code=404, detail="Project not found")

@router.delete("/{project_id}")
async def delete_project(project_id: str) -> dict:
    """Delete a project"""
    global PROJECTS
    PROJECTS = [p for p in PROJECTS if p["id"] != project_id]
    return {"message": "Project deleted"}