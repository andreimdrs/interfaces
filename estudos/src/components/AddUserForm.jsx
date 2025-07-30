// src/components/AddUserForm.jsx
import React from 'react';

const AddUserForm = ({
                         nome,
                         profissao,
                         enviado,
                         mensagemFormulario,
                         onNomeChange,
                         onProfissaoChange,
                         onSubmit
                     }) => {
    return (
        <>
            <h2>Adicionar novo usuário</h2>
            <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px', margin: '0 auto' }}>
                <input
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={onNomeChange}
                    disabled={enviado}
                    style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
                <input
                    type="text"
                    placeholder="Profissão"
                    value={profissao}
                    onChange={onProfissaoChange}
                    disabled={enviado}
                    style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
                <button type="submit" disabled={enviado}
                        style={{
                            padding: '10px 15px',
                            backgroundColor: '#007bff',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s ease'
                        }}
                >
                    {enviado ? 'Enviando...' : 'Enviar Usuário'}
                </button>
            </form>
            {enviado && <p>Enviando usuário...</p>}
            {mensagemFormulario && <p style={{ color: mensagemFormulario.includes('Erro') ? 'red' : 'green' }}>{mensagemFormulario}</p>}
        </>
    );
};

export default AddUserForm;
