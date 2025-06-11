// src/components/Dashboard.jsx
import React from 'react';

/**
 * Componente container que agrupa conteúdos relacionados
 * 
 * Props:
 * - title: Título a ser exibido no dashboard
 * - children: Conteúdo a ser renderizado dentro do dashboard (passado como filhos JSX)
 */
const Dashboard = ({ title, children }) => {
  return (
    <div className="dashboard">
      {/* Título do dashboard */}
      <h2>{title}</h2>
      
      {/* Renderiza os children - conteúdo passado entre as tags de abertura e fechamento */}
      {children}
    </div>
  );
};

export default Dashboard;