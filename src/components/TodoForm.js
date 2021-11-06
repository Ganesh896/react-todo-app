import React, { useState } from "react";
import classes from "./TodoForm.module.css";

function TodoForm(props) {
  const [inputText, setInputText] = useState(
    props.editTodo ? props.editTodo.value : ""
  );

  const inputTextHandler = (event) => {
    setInputText(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (inputText.trim().length === 0) {
      return;
    }

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: inputText,
    });

    setInputText("");
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <input
        type="text"
        name="text"
        placeholder="Type here..."
        value={inputText}
        onChange={inputTextHandler}
      />
      <button type="submit">Add todo</button>
    </form>
  );
}

export default TodoForm;
