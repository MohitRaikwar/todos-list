import "./App.css";
import Todos from "./components/Todos";
import React, { useState, useEffect } from "react";
import AddTodo from "./components/AddTodo";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) initTodo = [];
  else initTodo = JSON.parse(localStorage.getItem("todos"));

  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) sno = 1;
    else sno = todos[todos.length - 1].sno + 1;
    const mytodo = {
      sno: sno,
      title: title,
      desc: desc,
    };

    setTodos([...todos, mytodo]);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
    </>
  );
}

export default App;
