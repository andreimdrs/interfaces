// src/App.jsx
import React, { useState } from 'react';
// Importação de componentes
import Dashboard from './components/Dashboard';
import TodoList from './components/TodoList';
import ThemeToggle from './components/ThemeToggle';
// Importa os dados iniciais das tarefas
import todosData from './data/todos';
// Importa os estilos
import './App.css';

function App() {
  // Estado para armazenar a lista de tarefas
  // - Inicializado com os dados importados de todosData
  const [todos, setTodos] = useState(todosData);
  
  // Estado para controlar se o tema escuro está ativo
  // - Inicializado como false (tema claro)
  const [darkMode, setDarkMode] = useState(false);

  /**
   * Função para alternar o estado de conclusão de uma tarefa
   * @param {number} id - ID da tarefa a ser alternada
   */
  const handleToggleTodo = (id) => {
    // Atualiza o estado das tarefas
    setTodos(todos.map(todo => 
      // Se o ID corresponder, inverte o estado 'completed'
      // Caso contrário, retorna a tarefa inalterada
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  /**
   * Função para filtrar tarefas por estado de conclusão
   * @param {boolean} completed - Estado de conclusão a filtrar
   * @returns {array} Array de tarefas filtradas
   */
  const filterTodos = (completed) => {
    return todos.filter(todo => todo.completed === completed);
  };

  return (
    // Container principal da aplicação
    // - Classe dinâmica: alterna entre 'light-theme' e 'dark-theme' baseado no estado
    <div className={`app ${darkMode ? 'dark-theme' : 'light-theme'}`}>
      {/* Cabeçalho com título e botão de alternar tema */}
      <div className="header">
        <h1>Minha Lista de Tarefas</h1>
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      
      {/* Dashboard para tarefas pendentes */}
      <Dashboard title="Tarefas Pendentes">
        {/* TodoList é passado como children para Dashboard */}
        <TodoList 
          todos={filterTodos(false)} // Filtra tarefas não concluídas
          onToggle={handleToggleTodo} // Passa a função de alternar
        />
      </Dashboard>
      
      {/* Dashboard para tarefas concluídas */}
      <Dashboard title="Tarefas Concluídas">
        <TodoList 
          todos={filterTodos(true)} // Filtra tarefas concluídas
          onToggle={handleToggleTodo} 
        />
      </Dashboard>
    </div>
  );
}

export default App;