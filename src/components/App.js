import React, { useState } from "react";
import "./../styles/App.css";
import TodoList from "./TodoList";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, task: "Learn React", isCompleted: false },
    { id: 2, task: "Build a React app", isCompleted: false },
    { id: 3, task: "Deploy the React App", isCompleted: false },
  ]);

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Parent Component</h1>
      <TodoList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;
