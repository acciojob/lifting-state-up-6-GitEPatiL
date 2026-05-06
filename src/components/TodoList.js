import React from "react";

const TodoList = ({ tasks, setTasks }) => {
  console.log(tasks);

  const ChangeState = (id) => {
    const updatedTasks = tasks.map((item)=>{
        if(item.id === id){
            return {
                ...item,
                isCompleted:true
            }
            
        }else {
                return item;
            }
    })

    setTasks(updatedTasks)
  };

  return (
    <div>
      <h1>Child Component</h1>
      <ul>
        {tasks.map((item) => {
          return (
            <li key={item.id}>
              {item.task}
              {!item.isCompleted && (
                <button onClick={() => ChangeState(item.id)}>Complete</button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
