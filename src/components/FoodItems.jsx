import { useState, useEffect } from "react";
import FoodItem from "./FoodItem";
export default function FoodItems() {
  const [loadedFoodItems, setLoadedFoodItems] = useState([]);
  useEffect(() => {
    async function fetchItems() {
      const response = await fetch("http://localhost:3000/meals");
      if (!response.ok) {
        console.log('Something went wrong!');
      }
      const foodItems = await response.json();
      setLoadedFoodItems(foodItems);
    }
    fetchItems();
  }, []);
  return (
    <ul id='meals'>
      {loadedFoodItems && loadedFoodItems.map((item, index) => (
        <FoodItem
          key={item.id}
          foodItem={item}
        />
      ))}
    </ul>
  )
}