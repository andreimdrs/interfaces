import React from 'react';

const UsernameTable = ({ usernames, loading, error }) => {
  if (loading) return <div className="tabela-usernames">Carregando usernames...</div>;
  if (error) return <div className="tabela-usernames">Erro: {error}</div>;
  
  return (
    <div className="tabela-usernames" style={{ 
      border: '2px solid #2ecc71',
      borderRadius: '10px',
      padding: '15px',
      marginBottom: '20px',
      backgroundColor: '#d5f5e3'
    }}>
      <h2 style={{ color: '#27ae60' }}>Usernames</h2>
      <table style={{ width: '100%' }}>
        <thead>
          <tr style={{ backgroundColor: '#2ecc71', color: 'white' }}>
            <th style={{ padding: '10px' }}>Identificação</th>
          </tr>
        </thead>
        <tbody>
          {usernames.map((username, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#d5f5e3' }}>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>@{username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsernameTable;