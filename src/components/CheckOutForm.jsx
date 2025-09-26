import { useContext } from "react";;
import { CartContext } from "./../store/CartContext";
import Input from "./UI/Input";
export default function CheckOutForm({ actions }) {
  const { items } = useContext(CartContext);
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const customerData = Object.fromEntries(formData.entries());

    fetch("htpp://localhost:3000/orders", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        order: {
          items: items,
          customer: customerData
        }
      })
    })
  }

  return (
    <>
      <h3>Total Amount: ${totalPrice.toFixed(2)}</h3>
      <form onSubmit={handleSubmit}>
        <Input label="Name" type="text" eleId="name" name="name" />
        <Input label="Email" type="email" eleId="email" name="email" />
        <Input label="Street" type="text" eleId="street" name="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" eleId="postalcode" name="postalcode" />
          <Input label="City" type="text" eleId="city" name="city" />
        </div>
        {/* <input type="number" name="total" defaultValue={totalPrice.toFixed(2)} hidden /> */}
        <div className="modal-actions">
          {actions}
        </div>
      </form>
    </>
  )
}