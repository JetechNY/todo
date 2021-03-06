import React, { useState, useRef, useEffect } from "react";
import SignUp from "./SignUp";
import TodoList from "./TodoList";
import Header from "./Header";
import Footer from "./Footer";
import uuidv4 from "uuid/v4";

const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleAddTodo(event) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  }

  function handleClearTodos() {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  }

  return (
    <>
      <SignUp />
      <Header />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todos</button>
      <button onClick={handleClearTodos}>Clear Completed Todos</button>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
        {todos.filter((todo) => !todo.complete).length} Items Left To Do
      <Footer />
    </>
  );
}

export default App;
