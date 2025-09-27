import { useContext } from "react";;
import { CartContext } from "./../store/CartContext";
import { toast } from "react-toastify";
import Input from "./UI/Input";
import useHttp from "../hooks/userHttp";

const requestConfig = {
  method: "POST",
  headers: {
    'content-type': 'application/json'
  },
};

export default function CheckOutForm({ actions }) {
  const cartCtx = useContext(CartContext);
  const {
    isLoading: isSending,
    data,
    error,
    sendRequest } = useHttp("http://localhost:3000/orders",
    requestConfig);
  const cartTotal = cartCtx.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const customerData = Object.fromEntries(formData.entries());
    sendRequest(JSON.stringify({
      user: {
        name: customerData.name,
        email: customerData.email,
        address: {
          street: customerData.street,
          postalCode: customerData["postal-code"],
          city: customerData.city,
        },
      },
      orderedItems: cartCtx.items,
      totalAmount: cartTotal.toFixed(2),
    }));
  };

  if (isSending) {
    actions = <span>Sending order data...</span>
  }

  if (data && !error) {
    toast("Your order was submitted successfully.");
  }

  return (
    <>
      <h3>Total Amount: ${cartTotal.toFixed(2)}</h3>
      <form onSubmit={handleSubmit}>
        <Input label="Name" type="text" eleId="name" name="name" />
        <Input label="Email" type="email" eleId="email" name="email" />
        <Input label="Street" type="text" eleId="street" name="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" eleId="postalcode" name="postal-code" />
          <Input label="City" type="text" eleId="city" name="city" />
        </div>
        {/* <input type="number" name="total" defaultValue={cartTotal.toFixed(2)} hidden /> */}
        { error && <Error title="Failed to submit order!" message={error} /> }
        <div className="modal-actions">
          {actions}
        </div>
      </form>
    </>
  )
}