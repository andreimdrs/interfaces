// src/components/UserList.jsx

// Importa o React, que é a base para criar nossos "pedaços de tela" (componentes).
import React from 'react';

// Define o componente funcional UserList.
// Ele recebe "props" (propriedades) que são como os ingredientes que ele precisa para funcionar.
// - title: O título que vai aparecer na lista (ex: "Todos os Usuários").
// - users: A lista de usuários que ele vai exibir.
// - backgroundColor: A cor de fundo para a "cesta" da lista.
const UserList = ({ title, users, backgroundColor }) => {
  // Tudo que está dentro do 'return' é o que o componente vai "desenhar" na tela.
  return (
    // Esta é a "cesta" principal da nossa lista.
    // Usamos 'style' para aplicar estilos diretamente aqui, como a cor de fundo,
    // preenchimento interno (padding), margem externa (margin) e cantos arredondados.
    <div style={{ backgroundColor: backgroundColor, padding: '10px', margin: '10px 0', borderRadius: '8px' }}>
      {/* O título da lista, que vem da prop 'title'. */}
      {/* 'fontWeight: 'bold'' deixa o texto em negrito e 'color: 'white'' o deixa branco. */}
      <p style={{ fontWeight: 'bold', color: 'white' }}>{title}</p>

      {/* Uma "condição": Se a lista de 'users' estiver vazia (tamanho 0)... */}
      {users.length === 0 ? (
        // ...então mostra esta mensagem.
        <p style={{ color: 'white' }}>Nenhum usuário cadastrado.</p>
      ) : (
        // ...senão (se tiver usuários), mostra uma lista não ordenada (<ul>).
        <ul>
          {/* Aqui entra o 'map'! Ele é como um "passa-a-passa":
              Para CADA 'usuario' na lista 'users', ele vai criar um item de lista (<li>).
              'key={usuario.id}' é super importante! É como uma "etiqueta única" para cada item,
              ajuda o React a saber qual item é qual quando a lista muda. */}
          {users.map(usuario => (
            <li key={usuario.id} style={{ color: 'white' }}>
              {usuario.nome} (Profissão: {usuario.profissao})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Exporta o componente para que ele possa ser usado em outros arquivos (como App.jsx).
export default UserList;
