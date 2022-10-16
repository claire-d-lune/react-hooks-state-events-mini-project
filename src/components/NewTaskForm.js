import React from "react";

function NewTaskForm({categories, setNewTask, newTaskInfo, handleSubmit}) {
  const categorySelections = categories.map(category => {
    if (category !== "All") {
      return <option key={category + "key"}>{category}</option>
    }
    return null
  })

  const handleOnChange = (e) => {
    const newTaskObject = {
      text: e.target.value, 
      category: newTaskInfo.category
    }
    console.log(newTaskObject)
    setNewTask(newTaskObject)
  }
  
  const handleCategoryChange = (e) => {
    const newTaskObject = {
      text: newTaskInfo.text,
      category: e.target.value
    }
    console.log(newTaskObject)
    setNewTask(newTaskObject)
  }



  console.log(categorySelections)
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={newTaskInfo.text} onChange={handleOnChange}/>
      </label>
      <label>
        Category
        <select name="category" value={newTaskInfo.category} onChange={handleCategoryChange}>
          {categorySelections}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
