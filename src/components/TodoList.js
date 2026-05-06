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

      {tasks.map((item) => {
        return (
          <div
            key={item.id}
            style={{ display: "flex", gap: "10px", margin: "10px" }}
          >
            <ul>
              <li>{item.task}</li>
            </ul>
            {!item.isCompleted && <button onClick={()=>{ChangeState(item.id)}}>Completed</button>}
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
