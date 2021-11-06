import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

import classes from "./TodoList.module.css";

function TodoList() {
  const [todoList, setTodoList] = useState([]);

  const todoListHandler = (todo) => {
    if (!todo) {
      return;
    }

    setTodoList((prevTodos) => {
      return [todo, ...prevTodos];
    });
  };

  const updateTodoHandler = (todoId, newTodo) => {
    if (!newTodo) {
      return;
    }
    setTodoList((prev) =>
      prev.map((item) => (item.id == todoId ? newTodo : item))
    );
  };

  const removeTodoHandler = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  const completeTodoHandler = (id) => {
    let updatedTodo = todoList.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodoList(updatedTodo);
  };

  return (
    <div>
      <TodoForm onSubmit={todoListHandler} />
      <div className={classes.todo_container}>
        <Todo
          todoLists={todoList}
          onCompleteTodo={completeTodoHandler}
          onRemoveTodo={removeTodoHandler}
          onUpdateTodo={updateTodoHandler}
        />
      </div>
    </div>
  );
}

export default TodoList;
