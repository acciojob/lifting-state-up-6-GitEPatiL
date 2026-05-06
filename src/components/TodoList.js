import React from "react";

const TodoList = ({ tasks, setTasks }) => {
  const ChangeState = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isCompleted: true,
          };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <div>
      <h1>Child Component</h1>
      {tasks.map((item) => {
        return (
          <div
            key={item.id}
            style={{ display: "flex", gap: "10px", margin: "10px" }}
          >
            <ul>
              <li>
                {item.task}
                {!item.isCompleted && (
                  <button onClick={() => ChangeState(item.id)}>Completed</button>
                )}
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};


export default TodoList;
