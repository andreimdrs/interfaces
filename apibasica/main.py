from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models import User

app = FastAPI()

# Configurar CORS para permitir acesso do React
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Banco de dados em memória
users_db = []

@app.post("/users/")
async def create_user(user: User):
    users_db.append(user.dict())
    return {"message": "Usuário criado com sucesso", "user": user}

@app.get("/users/")
async def get_users():
    return users_db

@app.get("/")
async def root():
    return {"message": "API de Usuários"}