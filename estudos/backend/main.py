# main.py

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Dict, Union
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Lembre-se de ajustar para domínios específicos em produção
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# NOVO MODELO: Para o que o cliente ENVIA na requisição POST (não tem ID)
class UsuarioCreate(BaseModel):
    nome: str
    profissao: str

# MODELO EXISTENTE: Para o que o servidor ARMAZENA e RETORNA (tem ID)
class Usuario(BaseModel):
    id: int
    nome: str
    profissao: str

db: List[Usuario] = [
    Usuario(id=1, nome="Alice", profissao="Engenharia"),
    Usuario(id=2, nome="Bob", profissao="Design"),
    Usuario(id=3, nome="Carlos", profissao="Desenvolvimento")
]
next_id = 4

@app.get("/usuarios", response_model=List[Usuario], summary="Obtém todos os usuários")
async def get_usuarios():
    """
    Retorna uma lista de todos os usuários cadastrados na API.
    """
    return db

@app.post("/usuarios", response_model=Usuario, status_code=201, summary="Adiciona um novo usuário")
async def create_usuario(usuario_data: UsuarioCreate): # <--- Agora espera um UsuarioCreate!
    """
    Cria um novo usuário com base nos dados fornecidos.

    - **nome**: O nome do usuário (string).
    - **profissao**: A profissão do usuário (string).

    Retorna o usuário recém-criado com o ID gerado pelo servidor.
    """
    global next_id
    # Cria uma instância do modelo Usuario COMPLETO, com o ID gerado e os dados recebidos
    novo_usuario_com_id = Usuario(id=next_id, nome=usuario_data.nome, profissao=usuario_data.profissao)
    db.append(novo_usuario_com_id)
    next_id += 1
    return novo_usuario_com_id # Retorna o objeto Usuario completo