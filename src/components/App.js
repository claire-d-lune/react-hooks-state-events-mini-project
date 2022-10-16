import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [currentTasks, taskSetter ] = useState(TASKS)
  const [selectedCategory, setCategory] = useState("All")

  //I want to create a useState hook that will contain the 
  //new selection to be passed to the setter and subsequently rendered
  const [newTaskInfo, setNewTask] = useState({
    text: "",
    category: "Code"
  })

  const onTaskSubmit = (e) => {
    e.preventDefault();
    taskSetter([...currentTasks, newTaskInfo])

    setNewTask({
      text: "",
      category: newTaskInfo.category
    })
  }


  //delete element function:
  const onDelete = (taskToDelete) => {
    console.log("task to delete is:" + taskToDelete)
    let newTasks = currentTasks.filter((task)=> {
      return (task.text !== taskToDelete)
    }) 
    taskSetter(newTasks)
  };

  const onCategoryChange = (newCategory) => {
    setCategory(newCategory)
    if (newCategory === "All") {
      taskSetter(TASKS);
      return;
    }
    const tasksInCategory = TASKS.filter((task) => {
      return ((task.category === newCategory) ? task : null)})
    taskSetter(tasksInCategory)
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      onCategoryChange={onCategoryChange} 
      categories={CATEGORIES} 
      selectedCategory={selectedCategory}/>
      <NewTaskForm 
      categories={CATEGORIES} 
      newTaskInfo={newTaskInfo}
      setNewTask={setNewTask} 
      handleSubmit={onTaskSubmit}/>
      <TaskList tasks={currentTasks} onDelete={onDelete}/>
    </div>
  );
}

export default App;
