import React from "react";
import Task from "./Task"

function TaskList({tasks, onDelete}) {
  console.log("rendering list")
  const taskMap = tasks.map((task) => {
    return (<Task key={task.text} text={task.text} category={task.category} onDelete={onDelete}/>)
  })

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {taskMap}
    </div>
  );
}

export default TaskList;
