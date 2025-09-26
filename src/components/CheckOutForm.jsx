import { useContext } from "react";;
import { CartContext } from "./../store/CartContext";
export default function CheckOutForm() {
  const { items } = useContext(CartContext);
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )
  return (
    <>
      <h3>Total Amount: ${totalPrice.toFixed(2)}</h3>
      <form>
        <div className="control">
          <label>Name</label>
          <input type="text" placeholder="Enter your name" />
        </div>
        <div className="control">
          <label>Email</label>
          <input type="email" placeholder="Enter your email address" />
        </div>
        <div className="control">
          <label>Street</label>
          <input type="text" placeholder="Enter your street name" />
        </div>
        <div className="control-row">
          <div className="control">
            <label>Postal Code</label>
            <input type="text" placeholder="Enter your postal code" />
          </div>
          <div className="control">
            <label>City</label>
            <input type="text" placeholder="Enter your city name" />
          </div>
        </div>
      </form>
    </>
  )
}