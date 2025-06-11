// src/components/TodoItem.jsx
import React from 'react';

/**
 * Componente que representa um item individual da lista de tarefas
 * 
 * Props:
 * - todo: Objeto contendo os dados da tarefa (id, text, completed)
 * - onToggle: Função para alternar o estado de conclusão da tarefa
 */
const TodoItem = ({ todo, onToggle }) => {
  return (
    // Container principal do item
    // - Classes condicionais: 'todo-item' sempre e 'completed' se a tarefa estiver concluída
    // - Estilos inline: textDecoration e opacity variam conforme o estado 'completed'
    <div 
      className={`todo-item ${todo.completed ? 'completed' : ''}`}
      style={{ 
        textDecoration: todo.completed ? 'line-through' : 'none',
        opacity: todo.completed ? 0.7 : 1
      }}
    >
      {/* Texto da tarefa */}
      {todo.text}
      
      {/* Botão para marcar/desmarcar como concluída */}
      <button 
        onClick={() => onToggle(todo.id)} // Chama onToggle passando o id
        className={todo.completed ? 'btn-undo' : 'btn-complete'} // Classe condicional
      >
        {/* Texto dinâmico do botão baseado no estado */}
        {todo.completed ? 'Desfazer' : 'Concluir'}
      </button>
    </div>
  );
};

export default TodoItem;