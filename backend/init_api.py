import os

# Create api package
os.makedirs("api", exist_ok=True)
with open("api/__init__.py", "w") as f:
    pass
