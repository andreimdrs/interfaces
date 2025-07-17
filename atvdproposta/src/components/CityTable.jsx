import React from 'react';

const CityTable = ({ cidades, loading, error }) => {
  if (loading) return <div className="tabela-cidades">Carregando cidades...</div>;
  if (error) return <div className="tabela-cidades">Erro: {error}</div>;
  
  return (
    <div className="tabela-cidades" style={{ 
      border: '2px solid #e74c3c',
      borderRadius: '10px',
      padding: '15px',
      backgroundColor: '#fadbd8'
    }}>
      <h2 style={{ color: '#c0392b' }}>Cidades</h2>
      <table style={{ width: '100%' }}>
        <thead>
          <tr style={{ backgroundColor: '#e74c3c', color: 'white' }}>
            <th style={{ padding: '10px' }}>Localização</th>
          </tr>
        </thead>
        <tbody>
          {cidades.map((cidade, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fadbd8' }}>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{cidade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CityTable;