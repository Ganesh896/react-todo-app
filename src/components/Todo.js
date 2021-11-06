import React, { useState } from "react";
import TodoForm from "./TodoForm";
import classes from "./Todo.module.css";

function Todo(props) {
  const [editTodo, setEditTodo] = useState({ id: null, value: "" });

  const submitUpdate = (value) => {
    props.onUpdateTodo(editTodo.id, value);
    setEditTodo({
      id: null,
      value: "",
    });
  };

  if (editTodo.id) {
    return <TodoForm editTodo={editTodo} onSubmit={submitUpdate} />;
  }

  return props.todoLists.map((todo, index) => (
    <div key={index} className={classes.todo}>
      <div className={classes.text} key={todo.id}>
        {todo.text}
      </div>
      <div>
        <i
          className="bx bxs-trash-alt"
          onClick={() => props.onRemoveTodo(todo.id)}
        ></i>
        <i
          className="bx bxs-edit-alt"
          onClick={() => setEditTodo({ id: todo.id, value: todo.text })}
        ></i>
      </div>
    </div>
  ));
}

export default Todo;
