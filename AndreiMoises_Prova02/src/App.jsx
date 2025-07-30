import React from 'react'
import './App.css'

function App() {
  document.body.style.backgroundColor = 'white';

  const [album, setAlbum] = useState([])
  const [userId, setUserId] = useState('')
  const [id, setId] = useState('')
  const [title, setTitle] = useState('')
  // 'carregado' indica se os dados estão sendo carregados do servidor (true = carregando, false = terminou).
  const [carregado, setCarregado] = useState(true);
  // 'erro' guarda qualquer mensagem de erro que possa acontecer ao buscar/enviar dados.
  const [erro, setErro] = useState(null);
  // 'enviado' indica se o formulário de adição está em processo de envio.
  const [enviado, setEnviado] = useState(false);
  // 'mensagemFormulario' guarda mensagens de feedback para o usuário sobre o formulário (sucesso/erro).
  const [mensagemFormulario, setMensagemFormulario] = useState('');

  const buscarAlbum = async () => {
    // Marca que estamos carregando e limpa qualquer erro anterior.
    setCarregado(true);
    setErro(null);

    try {
      // Faz uma requisição para o nosso backend FastAPI.
      const resposta = await fetch('http://https://jsonplaceholder.typicode.com/albums');
      // Se a resposta não for OK (ex: erro 404, 500), lança um erro.
      if (!resposta.ok) {
        throw new Error('Não consegui buscar ninguém!');
      }
      // Converte a resposta para JSON (os dados que o servidor enviou).
      const dados = await resposta.json();
      // Atualiza o estado 'usuarios' com os dados recebidos.
      setAlbum(dados);
    } catch (problema) {
      // Se der algum problema na requisição, mostra no console e atualiza o estado de erro.
      console.error('Erro ao buscar usuários: ', problema);
      setErro('Vish, deu zebra ao buscar! ' + problema.message);
    } finally {
      // No final, sempre marca que o carregamento terminou, independente de ter dado erro ou não.
      setCarregado(false);
    }
  };

useEffect(() => {
  buscarAlbum(); // Chama a função para buscar os usuários assim que o app carrega.
}, []);

  return (
    <>
      <div>
      </div>
    </>
  )
}

export default App
