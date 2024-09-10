import axios from "axios";
import React from "react";

function TodoItem({ todo, updateTodo }) {
  function putTodo() {
    axios
      .put("http://localhost:3000/todos/"+todo.id , 
        {
         ...todo,
        completed:!todo.completed,
        }
      )
      .then((res) => {updateTodo(res.data)
        
      })
      .catch((err) => console.log(err));
  }
  return (
    <li
      style={{ color: todo.completed ? "green" : "red" }}
      onClick={putTodo}
    >
      {todo.task}
    </li>
  );
}

export default TodoItem;
