import { useContext } from "react";;
import { CartContext } from "./../store/CartContext";
import { UserProgressContext } from "./../store/UserProgressContext";
import Button from "./UI/Button";
export default function Cart({ actions }) {
  const { items, quantity } = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const formattedTotalPrice = `$${cartTotal.toFixed(2)}`;
  return (
    <form method="dialog">
      {items.length === 0 && <p className="center orange"><b>No items in cart!</b></p>}
      {items.length > 0 && (
        <ul>
          {items.map(item => {
            const itemPrice = parseInt(item.price);
            const formattedPrice = `$${itemPrice.toFixed(2)}`;
            return (
              <li key={item.id} className="cart-item">
                <div className="control-row">
                  <span>{item.name}</span>
                  <span>({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <Button textOnly={true} onClick={() => quantity(item.id, -1)}>
                    -
                  </Button>
                  <span>{item.quantity}</span>
                  <Button textOnly={true} onClick={() => quantity(item.id, 1)}>
                    +
                  </Button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p className="cart-total">Cart Total: <strong>{formattedTotalPrice}</strong></p>
      <div className="modal-actions">
        {actions}
      </div>
    </form>
  );
}
