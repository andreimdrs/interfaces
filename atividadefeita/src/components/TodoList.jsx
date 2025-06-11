// src/components/TodoList.jsx
import React from 'react';
import TodoItem from './TodoItem';

/**
 * Componente que renderiza uma lista de tarefas
 * 
 * Props:
 * - todos: Array de objetos de tarefas a serem renderizadas
 * - onToggle: Função para passar para cada TodoItem
 */
const TodoList = ({ todos, onToggle }) => {
  return (
    <div className="todo-list">
      {/* Mapeia cada tarefa no array para um componente TodoItem */}
      {todos.map(todo => (
        <TodoItem 
          key={todo.id}     // Chave única para otimização de renderização
          todo={todo}       // Passa o objeto da tarefa
          onToggle={onToggle} // Passa a função de alternar estado
        />
      ))}
    </div>
  );
};

export default TodoList;