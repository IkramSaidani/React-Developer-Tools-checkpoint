import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: 'Do the dishes', completed: false },
    { id: 2, task: 'Take out trash', completed: false },
  ]);

  const addTodo = (newTask) => {
    const newTodo = { id: todos.length + 1, task: newTask, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <button onClick={() => addTodo('New Task')}>Add Todo</button>
    </div>
  );
}

export default App;
