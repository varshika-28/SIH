from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api import users, feasibility
from database import engine, Base

# Create tables (for dev, normally use migrations)
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="GraminVeda API",
    description="AI-Driven Hyper-Local Business Advisory API",
    version="1.0.0"
)

# CORS middleware for frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(users.router)
app.include_router(feasibility.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to the GraminVeda API"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
