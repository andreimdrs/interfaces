// src/components/FilteredUserLists.jsx

// Importa o React.
import React from 'react';

// Define o componente FilteredUserLists.
// Ele recebe as listas já separadas por profissão como props.
// - engenheiros: Lista de usuários com profissão 'Engenharia'.
// - desenvolvedores: Lista de usuários com profissão 'Desenvolvimento'.
// - designers: Lista de usuários com profissão 'Design'.
const FilteredUserLists = ({ engenheiros, desenvolvedores, designers }) => {
  return (
    // Esta div principal organiza as três caixas de listas lado a lado.
    // 'display: 'flex'' e 'justifyContent: 'space-around'' ajudam a distribuir o espaço.
    // 'flexWrap: 'wrap'' faz com que as caixas quebrem para a linha de baixo se a tela for pequena.
    // 'gap: '10px'' adiciona um espaço entre as caixas.
    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '10px' }}>

      {/* Caixa para Engenheiros */}
      {/* Cada div tem uma cor de fundo, preenchimento, cantos arredondados.
          'flex: '1 1 30%'' faz com que cada caixa tente ocupar 30% da largura,
          mas seja flexível para crescer ou encolher.
          'minWidth: '200px'' garante que a caixa não fique menor que 200px. */}
      <div style={{ backgroundColor: "gray", padding: '10px', borderRadius: '8px', flex: '1 1 30%', minWidth: '200px' }}>
        <p style={{ fontWeight: 'bold', color: 'white' }}>Engenheiros</p>
        {/* Verifica se há engenheiros na lista. */}
        {engenheiros.length === 0 ? (
          <p style={{ color: 'white' }}>Nenhum engenheiro.</p>
        ) : (
          <ul>
            {/* Usa 'map' para exibir cada engenheiro. */}
            {engenheiros.map(engenheiro => (
              <li key={engenheiro.id} style={{ color: 'white' }}>
                {engenheiro.nome}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Caixa para Desenvolvedores (lógica igual à de Engenheiros) */}
      <div style={{ backgroundColor: "red", padding: '10px', borderRadius: '8px', flex: '1 1 30%', minWidth: '200px' }}>
        <p style={{ fontWeight: 'bold', color: 'white' }}>Desenvolvedores</p>
        {desenvolvedores.length === 0 ? (
          <p style={{ color: 'white' }}>Nenhum desenvolvedor.</p>
        ) : (
          <ul>
            {desenvolvedores.map(desenvolvedor => (
              <li key={desenvolvedor.id} style={{ color: 'white' }}>
                {desenvolvedor.nome}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Caixa para Designers (lógica igual à de Engenheiros) */}
      <div style={{ backgroundColor: "green", padding: '10px', borderRadius: '8px', flex: '1 1 30%', minWidth: '200px' }}>
        <p style={{ fontWeight: 'bold', color: 'white' }}>Designers</p>
        {designers.length === 0 ? (
          <p style={{ color: 'white' }}>Nenhum designer.</p>
        ) : (
          <ul>
            {designers.map(designer => (
              <li key={designer.id} style={{ color: 'white' }}>
                {designer.nome}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

// Exporta o componente.
export default FilteredUserLists;
