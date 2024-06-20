import React, { useState } from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  //handling submit of an event
  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      setTodo("");
    }
  };
//handling the delete the event
  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Todo List</h1>
        <Form
          handleSubmit={handleSubmit}
          todo={todo}
          setTodo={setTodo}
        />
        <List
          todos={todos}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default App;