import React from "react";

const TodoList = ({ todos, handleComplete }) => {

  return (
    <div>
      <h1>Child Component</h1>

      <ul>

        {todos.map((item) => (

          <li key={item.id}>

            {item.task}

            {!item.completed && (

              <button
                onClick={() => handleComplete(item.id)}
              >
                complete
              </button>

            )}

          </li>

        ))}

      </ul>
    </div>
  );
};

export default TodoList;

