import List from "./component/List";
import Form from "./component/Form";
import { useState } from "react";

const Todo = () => {
  const todosList = [
    {
      id: 1,
      content: "店予約する",
    },
    {
      id: 2,
      content: "卵買う",
    },
    {
      id: 3,
      content: "郵便出す",
    },
  ];
  const [todos, setTodos] = useState(todosList);

  const deleteTodo = (id) => {
    // idが一致しないものをリストに残してセットしなおす => 丸ごと書き換えを行う
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    })
    setTodos(newTodos);
  } 
  const createTodo = (todo) => {
    setTodos([...todos, todo])
  }

  return (
    <>
    <List todos={todos} deleteTodo={deleteTodo} />
    <Form createTodo={createTodo} />
    </>
  );
};

export default Todo;