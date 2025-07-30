// src/components/AddUserForm.jsx

// Importa o React.
import React from 'react';

// Define o componente AddUserForm.
// Ele recebe todas as informações e funções que precisa do componente pai (App.jsx) via props.
// - nome, profissao: Os valores atuais dos campos de input.
// - enviado: Um booleano que indica se o formulário está sendo enviado (para desabilitar o botão).
// - mensagemFormulario: A mensagem para exibir ao usuário (sucesso/erro).
// - onNomeChange, onProfissaoChange: Funções para atualizar o nome e a profissão quando o usuário digita.
// - onSubmit: A função para lidar com o envio do formulário.
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
    // O '<>' é um Fragmento React, usado para agrupar elementos sem adicionar uma div extra no HTML.
    <>
      <h2>Adicionar novo usuário</h2>
      {/* O formulário em si.
          'onSubmit={onSubmit}' diz que quando o formulário for enviado, a função 'onSubmit' (passada via prop) será chamada.
          Os estilos aqui organizam os campos em coluna. */}
      <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px', margin: '0 auto' }}>
        {/* Campo de input para o nome.
            'value={nome}' faz com que o input exiba o valor da prop 'nome'.
            'onChange={onNomeChange}' chama a função 'onNomeChange' a cada digitação.
            'disabled={enviado}' desabilita o campo enquanto o formulário está sendo enviado. */}
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={onNomeChange}
          disabled={enviado}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        {/* Campo de input para a profissão (funciona igual ao do nome). */}
        <input
          type="text"
          placeholder="Profissão"
          value={profissao}
          onChange={onProfissaoChange}
          disabled={enviado}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        {/* Botão de envio.
            'disabled={enviado}' desabilita o botão enquanto o formulário está sendo enviado.
            O texto do botão muda dependendo se está enviando ou não. */}
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
      {/* Mensagem de "Enviando..." que aparece enquanto o formulário está sendo processado. */}
      {enviado && <p>Enviando usuário...</p>}
      {/* Mensagem de sucesso ou erro do formulário.
          A cor do texto muda para vermelho se a mensagem incluir "Erro". */}
      {mensagemFormulario && <p style={{ color: mensagemFormulario.includes('Erro') ? 'red' : 'green' }}>{mensagemFormulario}</p>}
    </>
  );
};

// Exporta o componente.
export default AddUserForm;
