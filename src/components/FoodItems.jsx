import FoodItem from "./FoodItem";
import useHttp from "../hooks/userHttp";
import Error from "./Error";

const requestConfig = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
};

export default function FoodItems() {
  const {
    data: loadedFoodItems,
    isLoading,
    error
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p className="center">Loading...</p>
  }

  if (error) {
    return <Error title="Failed to fetch Food items" message={error} />
  }

  if (!loadedFoodItems || loadedFoodItems.length === 0) {
    return <p className="center">No food items found.</p>
  }

  return (
    <ul id='meals'>
      {loadedFoodItems && loadedFoodItems.map(item => (
        <FoodItem
          key={item.id}
          foodItem={item}
        />
      ))}
    </ul>
  )
}