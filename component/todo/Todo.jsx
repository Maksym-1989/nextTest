import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import useLocalStorage from "../../shared/hooks/useLocalStorage";

const Todo = () => {
  const [userInput, setUserInput] = useState("");

  const [todoStoredValue, setTodoStoredValue] = useLocalStorage("todo", []);

  useEffect(() => {}, [todoStoredValue]);

  const handleChange = (event) => {
    event.preventDefault();
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!userInput) return;
    setTodoStoredValue([
      ...todoStoredValue,
      {
        id: uuidv4(),
        message: userInput,
        done: false,
      },
    ]);
    setUserInput("");
  };

  const handleDelete = (todo) => {
    const newArr = todoStoredValue.filter((todoItem) => todoItem !== todo);
    setTodoStoredValue(newArr);
  };
  const handleClickOnTodo = (id) => {
    const todoListDone = todoStoredValue.map((todo) => {
      if (id === todo.id) {
        todo.done = !todo.done;
        return todo;
      }
      return todo;
    });
    setTodoStoredValue(todoListDone);
  };

  return (
    <>
      <h1>Todo List</h1>
      <form>
        <input type="text" onChange={handleChange} value={userInput} />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <ul>
        {todoStoredValue.map((todo) => {
          return (
            <li key={todo.id}>
              <p
                className={todo.done ? "done" : ""}
                onClick={() => handleClickOnTodo(todo.id)}
              >
                {todo.message}
              </p>
              <button onClick={() => handleDelete(todo)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Todo;
