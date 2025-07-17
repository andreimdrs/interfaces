import React from 'react';

const NameTable = ({ nomes, loading, error }) => {
  if (loading) return <div className="tabela-nomes">Carregando nomes...</div>;
  if (error) return <div className="tabela-nomes">Erro: {error}</div>;
  
  return (
    <div className="tabela-nomes" style={{ 
      border: '2px solid #3498db',
      borderRadius: '10px',
      padding: '15px',
      marginBottom: '20px',
      backgroundColor: '#e3f2fd'
    }}>
      <h2 style={{ color: '#2980b9' }}>Nomes dos Usuários</h2>
      <table style={{ width: '100%' }}>
        <thead>
          <tr style={{ backgroundColor: '#3498db', color: 'white' }}>
            <th style={{ padding: '10px' }}>Nome Completo</th>
          </tr>
        </thead>
        <tbody>
          {nomes.map((nome, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#e3f2fd' }}>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{nome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NameTable;