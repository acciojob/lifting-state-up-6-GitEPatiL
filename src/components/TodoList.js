import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, task: "Learn React", isCompleted: false },
    { id: 2, task: "Build a React app", isCompleted: false },
    { id: 3, task: "Deploy the React App", isCompleted: false },
  ]);

  const handleComplete = (id) => {
    setTasks((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isCompleted: true } : item
      )
    );
  };

  return (
    <div>
      <h1>Child Component</h1>
      <ul>
        {tasks.map((item) => (
          <li key={item.id}>
            {item.task}
            {!item.isCompleted && (
              <button onClick={() => handleComplete(item.id)}>Complete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
