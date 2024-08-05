// ShoppingList.js
import React, { useState } from "react";
import Item from "./Item"; // Import the Item component
// import Filter from "./Filter"; // Import the new Filter component


function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory); // Update the selected category
  };

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      {/* <Filter selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} /> Use Filter component */}
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
