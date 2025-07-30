# main.py

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Dict, Union
from fastapi.middleware.cors import CORSMiddleware

# Cria uma instância do aplicativo FastAPI
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Modelo Pydantic para definir a estrutura de um Usuário.
# Pydantic ajuda na validação de dados e na geração automática da documentação.
class Usuario(BaseModel):
    id: int
    nome: str
    profissao: str

# Lista em memória pa# ra armazenar os usuários# .# Em uma aplicação real, isso seria um banco de dados.
# Começamos com alguns usuários de exemplo.
db: List[Usuario] = [
    Usuario(id=1, nome="Alice", profissao="Engenharia"),
    Usuario(id=2, nome="Bob", profissao="Design"),
    Usuario(id=3, nome="Carlos", profissao="Desenvolvimento")
]

# Endpoint GET para obter todos os usuários
@app.get("/usuarios", response_model=List[Usuario], summary="Obtém todos os usuários")
async def get_usuarios():
    """
    Retorna uma lista de todos os usuários cadastrados na API.
    """
    return db

# Endpoint POST para adicionar um novo usuário
@app.post("/usuarios", response_model=Usuario, status_code=201, summary="Adiciona um novo usuário")
async def create_usuario(usuario: Usuario):
    """
    Cria um novo usuário com base nos dados fornecidos.

    - **nome**: O nome do usuário (string).
    - **profissao**: A profissão do usuário (string).

    Retorna o usuário recém-criado.
    """
    # Adiciona o novo usuário à lista em memória
    db.append(usuario)
    return usuario