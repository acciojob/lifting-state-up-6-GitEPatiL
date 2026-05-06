import React, { useState } from "react";
import "./../styles/App.css";
import TodoList from "./TodoList";

const App = () => {

  const [todos, setTodos] = useState([
    { id: 1, task: "Learn React", isCompleted: false },
    { id: 2, task: "Build a React App", isCompleted: false },
    { id: 3, task: "Deploy the React App", isCompleted: false }
  ]);

  const handleComplete = (id) => {

    const updatedTodos = todos.map((item) => {

      if (item.id === id) {

        return {
          ...item,
          isCompleted: true
        };

      } else {

        return item;

      }

    });

    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Parent Component</h1>

      <TodoList
        todos={todos}
        handleComplete={handleComplete}
      />
    </div>
  );
};

export default App;