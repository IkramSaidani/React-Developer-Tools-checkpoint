import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, updateTodo }) {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} />
      ))}
    </ul>
  );
}

export default TodoList;
