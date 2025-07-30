import React from 'react';

const UserList = ({ title, users, backgroundColor }) => {
    return (
        <div style={{ backgroundColor: backgroundColor, padding: '10px', margin: '10px 0', borderRadius: '8px' }}>
            <p style={{ fontWeight: 'bold', color: 'white' }}>{title}</p>
            {users.length === 0 ? (
                <p style={{ color: 'white' }}>Nenhum usuário cadastrado.</p>
            ) : (
                <ul>
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

export default UserList;
