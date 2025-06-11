// src/components/ThemeToggle.jsx
import React from 'react';

/**
 * Componente para alternar entre dark e light mode
 * 
 * Props:
 * - darkMode: Booleano indicando se o tema atual é escuro
 * - setDarkMode: Função para atualizar o estado do tema
 */
const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button 
      onClick={() => setDarkMode(!darkMode)} // Inverte o estado ao clicar
      className="theme-toggle"
    >
      {/* Ícone e texto dinâmicos baseados no tema atual */}
      {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default ThemeToggle;