# Entendendo React + Vite na Prática (para Macacos!)

E aí, macacada! Já falamos das ideias, agora vamos ver como essas ferramentas funcionam de verdade na selva do código! Preparem as bananas, porque a prática é o que importa!

---

## **1. Map: Transformando Bananas em Purê (ou o que você quiser!)**

Pensa assim: você tem uma cesta cheia de bananas. Com o `map`, você pode pegar cada banana e transformar ela em outra coisa, uma por uma, e colocar tudo numa nova cesta. A cesta original fica lá, intocada.

No React, a gente usa muito o `map` pra pegar uma lista de coisas (tipo nomes de frutas, ou fotos) e mostrar cada uma na tela.

**Exemplo Simples:**

Imagina que você tem uma lista de nomes de macacos e quer que cada nome apareça em um pedacinho separado na tela.

```jsx
// src/App.jsx
import React from 'react';

function App() {
  const nomesMacacos = ['Chico', 'Caco', 'Mico', 'Bia'];

  return (
    <div>
      <h1>Meus Amigos Macacos:</h1>
      {/* Aqui a magia acontece com o map! */}
      {nomesMacacos.map((nomeMacaco, indice) => (
        // Para cada nome na lista, criamos um parágrafo.
        // A "key" é como uma etiqueta única para o React saber qual é qual.
        <p key={indice}>{nomeMacaco} é meu amigo!</p>
      ))}
    </div>
  );
}

export default App;
```

**O que acontece:** O `map` vai pegar Chico, depois Caco, depois Mico, e para cada um, ele cria um parágrafo `<p>`. O resultado final na sua tela será:

```
Meus Amigos Macacos:
Chico é meu amigo!
Caco é meu amigo!
Mico é meu amigo!
Bia é meu amigo!
```

---

## **2. Filter: Separando as Bananas Maduras das Verdes!**

Com o `filter`, você olha pra sua cesta de bananas e diz: "Só quero as bananas bem maduras agora!" Ele vai passar por todas as bananas, ver quais são maduras, e só essas vão para a sua nova cesta. As verdes ficam de fora.

No React, a gente usa o `filter` para mostrar só uma parte da informação que temos, como, por exemplo, só os itens que o usuário pesquisou.

**Exemplo Simples:**

Você tem uma lista de frutas, mas só quer mostrar as que são vermelhas.

```jsx
// src/App.jsx
import React from 'react';

function App() {
  const listaFrutas = [
    { nome: 'Maçã', cor: 'vermelha' },
    { nome: 'Banana', cor: 'amarela' },
    { nome: 'Morango', cor: 'vermelha' },
    { nome: 'Uva', cor: 'roxa' },
    { nome: 'Cereja', cor: 'vermelha' },
  ];

  // Usamos o filter para pegar só as frutas vermelhas
  const frutasVermelhas = listaFrutas.filter(fruta => fruta.cor === 'vermelha');

  return (
    <div>
      <h1>Minhas Frutas Vermelhas:</h1>
      {/* Agora usamos o map para mostrar só as frutas vermelhas filtradas */}
      {frutasVermelhas.map((fruta, indice) => (
        <p key={indice}>{fruta.nome}</p>
      ))}
    </div>
  );
}

export default App;
```

**O que acontece:** O `filter` vai olhar para cada fruta e verificar se a cor é 'vermelha'. Só Maçã, Morango e Cereja vão passar, e depois o `map` vai mostrar só elas. A tela mostrará:

```
Minhas Frutas Vermelhas:
Maçã
Morango
Cereja
```

---

## **3. useEffect: Reagindo a Mudanças na Paisagem (da Tela!)**

Pensa que seu cérebro de macaco fica sempre de olho nas coisas que mudam ao redor. Quando a fruta aparece, você corre pegar. Quando o leão ruge, você sobe na árvore. O `useEffect` é assim: ele serve para fazer alguma coisa depois que a tela (o seu componente React) mudou ou apareceu pela primeira vez.

Ele é ótimo para coisas que não são diretamente desenhar na tela, como:

- Ir buscar bananas em outra árvore (dados de um servidor).
- Configurar uma armadilha (um timer).
- Mudar a cor da sua pele quando o sol aparece (mudar o título da página).

**Exemplo Simples (Mudança de Tela/Título):**

Vamos fazer com que o título da sua página mude cada vez que você clica num botão, como se você estivesse "mudando de humor".

```jsx
// src/App.jsx
import React, { useState, useEffect } from 'react';

function App() {
  const [humorMacaco, setHumorMacaco] = useState('Feliz');

  // O useEffect "observa" o humorMacaco.
  // Sempre que humorMacaco muda, ele faz a ação de dentro.
  useEffect(() => {
    console.log(`Meu humor mudou para: ${humorMacaco}`);
    // Isso muda o título da janela do navegador!
    document.title = `Macaco ${humorMacaco}`;
  }, [humorMacaco]); // A lista [humorMacaco] diz: "Execute isso de novo se humorMacaco mudar!"

  const alternarHumor = () => {
    setHumorMacaco(prevHumor => (prevHumor === 'Feliz' ? 'Pensativo' : 'Feliz'));
  };

  return (
    <div>
      <h1>Macaco está {humorMacaco}!</h1>
      <button onClick={alternarHumor}>Mudar Humor</button>
    </div>
  );
}

export default App;
```

**O que acontece:**

- Quando a página carrega, `humorMacaco` é 'Feliz', e o `useEffect` roda, mudando o título da aba do navegador para "Macaco Feliz".
- Quando você clica no botão "Mudar Humor", o `humorMacaco` muda para 'Pensativo'.
- Como `humorMacaco` mudou, o `useEffect` é ativado de novo! Ele atualiza o título da aba para "Macaco Pensativo".
- Clica de novo, e o ciclo se repete.

---

## **4. useEffect e FastAPI: Buscando Bananas na Árvore Longe (Servidor!)**

Agora, a parte mais legal! Imagina que as bananas não estão na sua cesta. Elas estão numa árvore bem longe, e você precisa pedir para alguém ir lá buscar para você. Essa "alguém" é o FastAPI (seu amigo entregador de bananas), e o `useEffect` é você dizendo: "Ei, quando eu estiver com fome (a tela carregar), vai lá e me traz as bananas!"

FastAPI é como um cozinheiro super rápido que prepara e entrega dados (nossas "bananas") quando alguém pede. Ele fica em um lugar separado, esperando chamados.

**Exemplo Prático:**

Vamos fazer um aplicativo React que busca uma lista de "frutas exóticas" de um servidor FastAPI.

### **Primeiro, o FastAPI (seu cozinheiro de bananas):**

Você vai precisar criar um arquivo Python para o FastAPI.

1. Crie uma pasta: `meu-projeto-frutas`
2. Dentro dela, crie duas pastas: `backend` e `frontend`

**backend/main.py (seu FastAPI):**

```python
# backend/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware  # Importe para permitir a conexão do React
import uvicorn  # Para rodar o servidor

app = FastAPI()

# Isso é importante! Permite que seu React (que está em outro "endereço") converse com o FastAPI.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # O endereço do seu app React com Vite
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/frutas")  # Quando alguém pedir /frutas, ele responde com essa lista
async def get_frutas():
    return [
        {"id": 1, "nome": "Jaca", "origem": "África"},
        {"id": 2, "nome": "Rambutan", "origem": "Ásia"},
        {"id": 3, "nome": "Açaí", "origem": "Amazônia"},
    ]

if __name__ == "__main__":
    # Para rodar: uvicorn main:app --reload
    uvicorn.run(app, host="0.0.0.0", port=8000)
```

**Como rodar o FastAPI:**

1. Abra seu terminal.
2. Vá para a pasta `backend`: `cd meu-projeto-frutas/backend`
3. Instale o FastAPI e o uvicorn: `pip install fastapi "uvicorn[standard]"`
4. Rode o servidor: `uvicorn main:app --reload`
5. Você verá uma mensagem como "Uvicorn running on http://127.0.0.1:8000". Isso significa que seu "cozinheiro de bananas" está funcionando!

### **Segundo, o React (seu app que pede as bananas):**

Agora, no seu projeto React (Vite), você vai usar o `useEffect` para pedir as frutas.

**frontend/src/App.jsx (seu app React):**

```jsx
// frontend/src/App.jsx
import React, { useState, useEffect } from 'react';

function App() {
  const [frutasExoticas, setFrutasExoticas] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  // Usamos useEffect para buscar os dados quando o componente "aparecer" na tela
  useEffect(() => {
    // Marcamos que estamos carregando os dados
    setCarregando(true);
    // Resetamos qualquer erro anterior
    setErro(null);

    // Vamos buscar as frutas do nosso FastAPI
    fetch('http://localhost:8000/frutas')  // O endereço do seu FastAPI!
      .then(resposta => {
        if (!resposta.ok) {  // Se a resposta não for OK (tipo 404 ou 500)
          throw new Error('Não consegui buscar as frutas exóticas!');
        }
        return resposta.json();  // Transforma a resposta em dados que o JavaScript entende
      })
      .then(dados => {
        setFrutasExoticas(dados);  // Coloca os dados que vieram do FastAPI na nossa lista
      })
      .catch(problema => {  // Se deu algum problema na comunicação
        console.error("Erro ao buscar frutas:", problema);
        setErro("Vish! Deu problema pra pegar as frutas: " + problema.message);
      })
      .finally(() => {
        setCarregando(false);  // Dizemos que o carregamento terminou
      });
  }, []);  // O array vazio [] aqui significa: "Execute isso UMA ÚNICA VEZ, quando o componente aparecer na tela"

  if (carregando) {
    return <div>Buscando frutas exóticas na floresta...</div>;
  }

  if (erro) {
    return <div style={{ color: 'red' }}>{erro}</div>;
  }

  return (
    <div>
      <h1>Minhas Frutas Exóticas da Floresta:</h1>
      {frutasExoticas.length === 0 ? (
        <p>Nenhuma fruta exótica encontrada. 🍌</p>
      ) : (
        <ul>
          {frutasExoticas.map(fruta => (
            <li key={fruta.id}>
              {fruta.nome} (Origem: {fruta.origem})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
```

**Como rodar o React com Vite:**

1. Abra um novo terminal (deixe o do FastAPI rodando).
2. Vá para a pasta `frontend`: `cd meu-projeto-frutas/frontend`
3. Crie o projeto Vite (se ainda não tiver): `npm create vite@latest . -- --template react` (escolha react e javascript)
4. Instale as dependências: `npm install`
5. Rode o app: `npm run dev`
6. Ele vai te dar um endereço, geralmente `http://localhost:5173`. Abra no navegador!

**O que acontece:**

- Quando sua página de macaco carrega, o `useEffect` (com o `[]` vazio) é ativado uma única vez.
- Ele faz um pedido (usa `fetch`) para o seu FastAPI, no endereço `http://localhost:8000/frutas`.
- O FastAPI, que está lá quietinho, recebe o pedido e responde com a lista de frutas.
- O `useEffect` no React recebe essa lista, e o `setFrutasExoticas(dados)` atualiza a sua lista de frutas no aplicativo.
- A tela é redesenhada para mostrar as frutas que vieram do servidor!

---

Viram, macacada? Com `map` a gente transforma e mostra coisas em lista. Com `filter` a gente escolhe só o que interessa. E com `useEffect`, a gente faz o nosso app reagir ao mundo exterior, buscar dados com o FastAPI e manter tudo fresquinho na tela!

Agora é a sua vez de brincar com esses conceitos na sua própria selva de código! Qual dessas ferramentas você está mais curioso pra usar primeiro?
