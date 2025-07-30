// App.jsx (Refatorado e Didático!)

// Importa os "Hooks" do React que nos permitem usar estado (useState) e efeitos colaterais (useEffect).
import { useEffect, useState } from 'react';

// Importa os novos componentes que criamos.
import UserList from './components/UserList.jsx';
import FilteredUserLists from './components/FilteredUserLists.jsx';
import AddUserForm from './components/AddUserForm.jsx';

// Importa o arquivo CSS para estilização geral do aplicativo.
import './App.css';

// Define o componente principal da aplicação.
function App() {
  // === Estados (useState): São como "caixinhas de memória" para guardar informações que mudam na tela. ===

  // 'usuarios' guarda a lista de todos os usuários. 'setUsuarios' é a função para atualizar essa lista.
  const [usuarios, setUsuarios] = useState([]);
  // 'nome' guarda o que está sendo digitado no campo de nome do formulário.
  const [nome, setNome] = useState('');
  // 'profissao' guarda o que está sendo digitado no campo de profissão do formulário.
  const [profissao, setProfissao] = useState('');
  // 'carregado' indica se os dados estão sendo carregados do servidor (true = carregando, false = terminou).
  const [carregado, setCarregado] = useState(true);
  // 'erro' guarda qualquer mensagem de erro que possa acontecer ao buscar/enviar dados.
  const [erro, setErro] = useState(null);
  // 'enviado' indica se o formulário de adição está em processo de envio.
  const [enviado, setEnviado] = useState(false);
  // 'mensagemFormulario' guarda mensagens de feedback para o usuário sobre o formulário (sucesso/erro).
  const [mensagemFormulario, setMensagemFormulario] = useState('');

  // === Lógica de Filtragem: Prepara as listas para os componentes de exibição. ===

  // Usa o 'filter' para criar uma nova lista só com usuários que são 'Engenharia'.
  const usuariosEngenheiros = usuarios.filter(usuario => usuario.profissao === 'Engenharia');
  // Filtra para pegar só os 'Design'.
  const usuariosDesigners = usuarios.filter(usuario => usuario.profissao === 'Design');
  // Filtra para pegar só os 'Desenvolvimento'.
  const usuariosDesenvolvedores = usuarios.filter(usuario => usuario.profissao === 'Desenvolvimento');

  // === Função para Buscar Usuários (GET): Vai buscar os dados lá no nosso "FastAPI" (servidor). ===

  const buscarUsuarios = async () => {
    // Marca que estamos carregando e limpa qualquer erro anterior.
    setCarregado(true);
    setErro(null);

    try {
      // Faz uma requisição para o nosso backend FastAPI.
      const resposta = await fetch('http://localhost:8000/usuarios');
      // Se a resposta não for OK (ex: erro 404, 500), lança um erro.
      if (!resposta.ok) {
        throw new Error('Não consegui buscar ninguém!');
      }
      // Converte a resposta para JSON (os dados que o servidor enviou).
      const dados = await resposta.json();
      // Atualiza o estado 'usuarios' com os dados recebidos.
      setUsuarios(dados);
    } catch (problema) {
      // Se der algum problema na requisição, mostra no console e atualiza o estado de erro.
      console.error('Erro ao buscar usuários: ', problema);
      setErro('Vish, deu zebra ao buscar! ' + problema.message);
    } finally {
      // No final, sempre marca que o carregamento terminou, independente de ter dado erro ou não.
      setCarregado(false);
    }
  };

  // === Efeito Colateral (useEffect): O "observador" que faz coisas quando a tela aparece. ===

  // Este useEffect é como um "oi, acabei de aparecer na tela!".
  // O array vazio '[]' como segundo argumento significa: "Execute esta função APENAS UMA VEZ,
  // quando o componente App for montado (aparecer na tela pela primeira vez)".
  useEffect(() => {
    buscarUsuarios(); // Chama a função para buscar os usuários assim que o app carrega.
  }, []);

  // === Função para Enviar Novo Usuário (POST): Manda os dados para o servidor. ===

  const handleSubmit = async (e) => {
    e.preventDefault(); // Impede que a página recarregue ao enviar o formulário (comportamento padrão do HTML).
    setMensagemFormulario(''); // Limpa qualquer mensagem de formulário anterior.

    // Validação básica: verifica se nome e profissão não estão vazios.
    if (!nome.trim() || !profissao.trim()) {
      setMensagemFormulario('Por favor, digite nome e profissão do usuário!');
      return; // Para a função aqui se a validação falhar.
    }

    // Marca que estamos enviando e limpa erros anteriores.
    setEnviado(true);
    setErro(null);

    try {
      // Faz uma requisição POST para o servidor.
      const resposta = await fetch('http://localhost:8000/usuarios', {
        method: 'POST', // Especifica que é uma requisição POST.
        headers: {
          'Content-Type': 'application/json', // Diz ao servidor que estamos enviando JSON.
        },
        // Converte o objeto JavaScript { nome: nome, profissao: profissao } para uma string JSON.
        body: JSON.stringify({ nome: nome, profissao: profissao }),
      });

      // Se a resposta do servidor não for OK, lança um erro.
      if (!resposta.ok) {
        throw new Error('Não consegui salvar novo usuário!');
      }

      // Converte a resposta do servidor (o usuário recém-criado) para JSON.
      const usuarioAdd = await resposta.json();
      console.log('Usuário adicionado com sucesso!', usuarioAdd);
      setMensagemFormulario('Usuário adicionado com sucesso!'); // Mensagem de sucesso.

      await buscarUsuarios(); // Re-busca a lista de usuários para que o novo apareça na tela.
      setNome(''); // Limpa o campo de nome no formulário.
      setProfissao(''); // Limpa o campo de profissão no formulário.
    } catch (problema) {
      // Se der erro no envio, mostra no console e atualiza as mensagens de erro.
      console.error('Erro ao adicionar usuário: ', problema);
      setErro('Vish, deu zebra ao adicionar! ' + problema.message);
      setMensagemFormulario('Erro ao adicionar usuário: ' + problema.message);
    } finally {
      // No final, sempre marca que o envio terminou.
      setEnviado(false);
    }
  };

  // === Renderização Condicional: O que mostrar dependendo do estado. ===

  // Se 'carregado' for true, mostra uma mensagem de carregamento.
  if (carregado) {
    return <div>Carregando nomes...</div>;
  }

  // Se 'erro' não for nulo, mostra a mensagem de erro em vermelho.
  if (erro) {
    return <div style={{ color: 'red' }}>{erro}</div>;
  }

  // === O que realmente aparece na tela (JSX). ===
  return (
    // O '<>' é um Fragmento React, usado para agrupar tudo sem adicionar uma div extra no HTML.
    <>
      {/* A div principal do aplicativo, com a classe 'App' para estilos gerais. */}
      <div className="App">
        <h1>Gerenciador de Usuários</h1>

        {/* Componente UserList: Mostra a lista de TODOS os usuários. */}
        {/* Passamos as props: título, a lista de usuários e a cor de fundo. */}
        <UserList
          title="Todos os Usuários"
          users={usuarios}
          backgroundColor="blue"
        />

        {/* Componente FilteredUserLists: Mostra as listas separadas por profissão. */}
        {/* Passamos as listas já filtradas como props. */}
        <FilteredUserLists
          engenheiros={usuariosEngenheiros}
          desenvolvedores={usuariosDesenvolvedores}
          designers={usuariosDesigners}
        />

        {/* Uma linha horizontal para separar as seções. */}
        <hr style={{ margin: '20px 0' }} />

        {/* Componente AddUserForm: O formulário para adicionar novos usuários. */}
        {/* Passamos os estados e as funções que ele precisa para funcionar.
            'onNomeChange' e 'onProfissaoChange' são funções que atualizam os estados 'nome' e 'profissao'
            quando o usuário digita. */}
        <AddUserForm
          nome={nome}
          profissao={profissao}
          enviado={enviado}
          mensagemFormulario={mensagemFormulario}
          onNomeChange={(e) => setNome(e.target.value)}
          onProfissaoChange={(e) => setProfissao(e.target.value)}
          onSubmit={handleSubmit}
        />
      </div>
    </>
  );
}

// Exporta o componente App para que ele possa ser renderizado no arquivo principal (main.jsx ou index.js).
export default App;
