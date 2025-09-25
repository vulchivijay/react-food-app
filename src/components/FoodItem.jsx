
export default function FoodItem({ image, title, description, price }) {
  return <li className='meal-item'>
    <div className='article'>
      <img src={`http://localhost:3000/${image}`} alt='item' />
      <h3>{title}</h3>
      <p className='meal-item-description'>{description}</p>
      <div className='meal-item-actions'>
        <button className='meal-item-price'>{price}</button>
      </div>
    </div>
  </li>
}