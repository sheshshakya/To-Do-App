import React from "react";

//form to submit the event
const Form = ({ handleSubmit, todo, setTodo}) => {
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Item"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
    </form>
  );
};

export default Form;