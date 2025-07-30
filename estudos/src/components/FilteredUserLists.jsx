// src/components/FilteredUserLists.jsx
import React from 'react';

const FilteredUserLists = ({ engenheiros, desenvolvedores, designers }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '10px' }}>
            <div style={{ backgroundColor: "gray", padding: '10px', borderRadius: '8px', flex: '1 1 30%', minWidth: '200px' }}>
                <p style={{ fontWeight: 'bold', color: 'white' }}>Engenheiros</p>
                {engenheiros.length === 0 ? (
                    <p style={{ color: 'white' }}>Nenhum engenheiro.</p>
                ) : (
                    <ul>
                        {engenheiros.map(engenheiro => (
                            <li key={engenheiro.id} style={{ color: 'white' }}>
                                {engenheiro.nome}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

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

export default FilteredUserLists;
