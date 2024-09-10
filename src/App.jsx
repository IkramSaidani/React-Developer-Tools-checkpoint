import { useEffect, useRef, useState } from "react";
import TodoList from "./components/TodoList";
import axios from "axios";

function App() {
  const reference = useRef();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/todos")
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleAddTodo = (newTask) => {
    axios
      .post("http://localhost:3000/todos", {
        id: (todos.length + 1).toString,
        task: reference.current.value,
        completed: false,
      })
      .then((res) => {
        setTodos([...todos, res.data]);
        reference.current.value = "";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateTodo = (ele) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === ele.id
          ? { ...todo, completed: !todo.completed }
          : todo;
      })
    );
  };

  return (
    <div>
      <h1 className="title">Todo List</h1>
      <TodoList todos={todos} updateTodo={updateTodo} />
      <input
        className="inputAdd"
        type="text"
        ref={reference}
        placeholder="Enter task"
      />
      <button className="buttonAdd" onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
}

export default App;
