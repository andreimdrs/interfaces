import {useEffect, useState} from 'react'
import Arquivo from "./components/Arquivo.jsx";
import ListaNomes from "./components/ListaNomes.jsx";
import './App.css'

function App() {
  const [usuarios, setUsuario] = useState([]);
  const [carregado, setCarregado] = useState(true);
  const [erro, setErro] = useState(null);
  const usuariosEngenheiros = usuarios.filter(usuario => usuario.profissao === 'Engenharia');
  const usuariosDesigners = usuarios.filter(usuario => usuario.profissao === 'Design');
  const usuariosDesenvolvedores = usuarios.filter(usuario => usuario.profissao === 'Desenvolvimento');

  useEffect(() => {
      setCarregado(true)
      setErro(null);

      fetch('http://localhost:8000/usuarios')
        .then(resposta => {
            if (!resposta.ok) {
                throw new Error('Erro na busca!')
            }
            return resposta.json();
        })
        .then(dados => {
            setUsuario(dados);
        })
          .catch(problema => {
              console.error("Erro na busca!" + problema);
              setErro(("Vish, deu zebra!" + problema));
          }).finally(() =>{
              setCarregado(false);
          })

  }, [])
  if (carregado) {
      return <div>Carregando nomes...</div>
  }  
  
  if (erro) {
      return <div style={{color: 'red'}}>{erro}</div>
  }
  
  return (
    <>
      <div className="App">
          <h1>Gerenciador de Nome</h1>
          {usuarios.length === 0 ? (
              <p>Nenhum nome...</p>
          ) : (
              <ul>
                  <div style={{backgroundColor: "blue"}}>
                      <p>Todos os usuários</p>
                      {usuarios.map(usuario => (
                          <li key={usuario.id}>
                              {usuario.nome} (Profissão: {usuario.profissao})
                          </li>
                      ))}
                  </div>


                  <div style={{backgroundColor: "gray"}}>
                      <p>Engenheiros</p>
                        {usuariosEngenheiros.map(engenheiro => (
                            <li key={engenheiro.id}>
                                {engenheiro.nome}
                            </li>
                        ))}
                  </div>

                  <div style={{backgroundColor: "red"}}>
                      <p>Desenvolvedores</p>
                      {usuariosDesenvolvedores.map(desenvolvedor => (
                          <li key={desenvolvedor.id}>
                              {desenvolvedor.nome}
                          </li>
                      ))}
                  </div>

                  <div style={{backgroundColor: "green"}}>
                      <p>Designers</p>
                      {usuariosDesigners.map(designer => (
                          <li key={designer.id}>
                              {designer.nome}
                          </li>
                      ))}
                  </div>



              </ul>


          )}
      </div>
    </>
  )
}

export default App
