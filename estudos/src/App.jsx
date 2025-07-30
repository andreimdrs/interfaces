// App.jsx (Refatorado!)

import { useEffect, useState } from 'react';
// Importa os novos componentes
import UserList from './components/UserList.jsx';
import FilteredUserLists from './components/FilteredUserLists.jsx';
import AddUserForm from './components/AddUserForm.jsx';
import './App.css';

function App() {
    const [usuarios, setUsuarios] = useState([]);
    const [nome, setNome] = useState('');
    const [profissao, setProfissao] = useState('');
    const [carregado, setCarregado] = useState(true);
    const [erro, setErro] = useState(null);
    const [enviado, setEnviado] = useState(false);
    const [mensagemFormulario, setMensagemFormulario] = useState('');

    const usuariosEngenheiros = usuarios.filter(usuario => usuario.profissao === 'Engenharia');
    const usuariosDesigners = usuarios.filter(usuario => usuario.profissao === 'Design');
    const usuariosDesenvolvedores = usuarios.filter(usuario => usuario.profissao === 'Desenvolvimento');

    const buscarUsuarios = async () => {
        setCarregado(true);
        setErro(null);

        try {
            const resposta = await fetch('http://localhost:8000/usuarios');
            if (!resposta.ok) {
                throw new Error('Não consegui buscar ninguém!');
            }
            const dados = await resposta.json();
            setUsuarios(dados);
        } catch (problema) {
            console.error('Erro ao buscar usuários: ', problema);
            setErro('Vish, deu zebra ao buscar! ' + problema.message);
        } finally {
            setCarregado(false);
        }
    };

    useEffect(() => {
        buscarUsuarios();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMensagemFormulario('');

        if (!nome.trim() || !profissao.trim()) {
            setMensagemFormulario('Por favor, digite nome e profissão do usuário!');
            return;
        }

        setEnviado(true);
        setErro(null);

        try {
            const resposta = await fetch('http://localhost:8000/usuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nome: nome, profissao: profissao }),
            });

            if (!resposta.ok) {
                throw new Error('Não consegui salvar novo usuário!');
            }

            const usuarioAdd = await resposta.json();
            console.log('Usuário adicionado com sucesso!', usuarioAdd);
            setMensagemFormulario('Usuário adicionado com sucesso!');

            await buscarUsuarios();
            setNome('');
            setProfissao('');
        } catch (problema) {
            console.error('Erro ao adicionar usuário: ', problema);
            setErro('Vish, deu zebra ao adicionar! ' + problema.message);
            setMensagemFormulario('Erro ao adicionar usuário: ' + problema.message);
        } finally {
            setEnviado(false);
        }
    };

    if (carregado) {
        return <div>Carregando nomes...</div>;
    }

    if (erro) {
        return <div style={{ color: 'red' }}>{erro}</div>;
    }

    return (
        <>
            <div className="App">
                <h1>Gerenciador de Usuários</h1>

                {/* Componente para a lista de todos os usuários */}
                <UserList
                    title="Todos os Usuários"
                    users={usuarios}
                    backgroundColor="blue"
                />

                {/* Componente para as listas filtradas */}
                <FilteredUserLists
                    engenheiros={usuariosEngenheiros}
                    desenvolvedores={usuariosDesenvolvedores}
                    designers={usuariosDesigners}
                />

                <hr style={{ margin: '20px 0' }} />

                {/* Componente para o formulário de adição */}
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

export default App;
