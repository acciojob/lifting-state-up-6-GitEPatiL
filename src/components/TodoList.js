import React from "react";

const TodoList = ({ tasks, completeTask }) => {
  return (
    <div>
      <h1>Child Component</h1>
      <ul>
        {tasks.map((item) => {
          return (
            <li key={item.id}>
              {item.task}
              {!item.isCompleted && (
                <button onClick={() => completeTask(item.id)}>Complete</button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
