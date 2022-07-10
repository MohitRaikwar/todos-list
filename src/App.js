import './App.css';
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import React, { useState, useEffect } from 'react';
import AddTodo from './MyComponents/AddTodo';
import About from './MyComponents/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null)
    initTodo = [];
  else
    initTodo = JSON.parse(localStorage.getItem("todos"));

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0)
      sno = 1;
    else
      sno = todos[todos.length - 1].sno + 1;
    const mytodo = {
      sno: sno,
      title: title,
      desc: desc
    }

    setTodos([...todos, mytodo]);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <Router>
      <Header title="MyTodosList" searchBar={true} />
      <Routes>
        <Route path="/" element={
          <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
          </>
        }>
        </Route>
        <Route path="/about" element={<About />}/>
      </Routes>

      <Footer />
    </Router>

  );
}

export default App;
