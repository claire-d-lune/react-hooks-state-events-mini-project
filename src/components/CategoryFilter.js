import React from "react";

function CategoryFilter({categories, onCategoryChange, selectedCategory}) {

  console.log(selectedCategory)

  const buttonList = categories.map((category) => { 
    
    console.log("Category = selected category?" + (category === selectedCategory))
    return (
    <button 
    key={category}
    onClick={() => onCategoryChange(category)}
    className={(category === selectedCategory) ? "selected" : "un-selected"}
    >{category}</button>)
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {buttonList}
    </div>
  );
}

export default CategoryFilter;
