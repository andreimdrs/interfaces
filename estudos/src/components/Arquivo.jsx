
import React, { useState } from 'react';

// Este componente recebe a prop 'onAddName' do componente pai (App.jsx)
const Arquivo = ({ nomeParaAdd }) => {
    // Estado para controlar o valor do input do formulário
    const [inputNome, setInputNome] = useState('');

    // Atualiza o estado 'inputNome' a cada digitação
    const handleInputChange = (e) => {
        setInputNome(e.target.value);
    }

    // Lida com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita o recarregamento da página

        // Chama a função 'nomeParaAdd' passada pelo componente pai,
        // enviando o nome digitado (já com .trim() para limpeza)
        nomeParaAdd(inputNome);

        // Limpa o input após o envio
        setInputNome('');
    }

    return (
        <div className="add-name-form">
            <form onSubmit={handleSubmit}>
                <label htmlFor="inputNome">Nome: </label>
                <input
                    type="text"
                    id="inputNome"
                    value={inputNome} // O valor do input é controlado por 'inputNome'
                    onChange={handleInputChange} // Atualiza 'inputNome' a cada mudança
                    placeholder="Digite o nome"
                    required
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Arquivo;
