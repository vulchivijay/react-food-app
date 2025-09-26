import { useContext } from "react";
import { CartContext } from "../store/CartContext";
import { currencyFormatter } from "../util/CurrencyFormat";
import Button from "./UI/Button";

export default function FoodItem({ foodItem }) {
  const { addItem } = useContext(CartContext);
  const currencyPrice = currencyFormatter.format(foodItem.price);
  
  return <li className='meal-item'>
    <article>
      <img src={`http://localhost:3000/${foodItem.image}`} alt={title} />
      <div>
        <h3>{foodItem.name}</h3>
        <p className='meal-item-price'>{currencyPrice}</p>
        <p className='meal-item-description'>{foodItem.description}</p>
      </div>
      <div className='meal-item-actions'>
        <Button textOnly={false} onClick={() => addItem(foodItem)}>Add to Cart</Button>
      </div>
    </article>
  </li>
}