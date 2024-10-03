import React from "react";

//list after adding the todos
const TodoList = ({ todos, handleDelete}) => {
  return (
    <ul className="allTodos">
      {todos.map((key) => (
        <li className="singleTodo">
          <span className="todoText" key={key.id}>
            {key.todo}
          </span>
          <button onClick={() => handleDelete(key.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;