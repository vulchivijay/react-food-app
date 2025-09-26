import { createContext, useReducer } from "react";
import { toast } from 'react-toastify';

export const CartContext = createContext({
  items: [],
  addItem: (item) => { },
  quantity: (id) => { },
});
function cartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    const updatedItems = [...state.items];
    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload.id
    );
    const existingCartItem = updatedItems[existingCartItemIndex];
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const item = state.items.find((item) => item.id === action.payload.id);
      updatedItems.push({
        id: action.payload.id,
        name: item?.name ? item.name : action.payload.name,
        price: item?.price ? item.price : action.payload.price,
        quantity: 1,
      });
    }
    return {
      items: updatedItems,
    };
  }
  if (action.type === 'UPDATE_QUANTITY') {
    const updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex(
      (item) => item.id === action.payload.id
    );
    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };
    updatedItem.quantity += action.payload.price;
    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
    };
  }
  return state;
}

export default function CartContextProvider({ children }) {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    items: [],
  });
  function handleAddItem(item) {
    toast("Add to Cart");
    cartDispatch({
      type: 'ADD_ITEM',
      payload: item,
    })
  }
  function handleItemQuantity(itemId, price) {
    console.log(itemId, price);
    cartDispatch({
      type: 'UPDATE_QUANTITY',
      payload: {
        id: itemId,
        price: price,
      }
    })
  }
  const ctxValue = {
    items: cartState.items,
    addItem: handleAddItem,
    quantity: handleItemQuantity
  }
  return <CartContext.Provider value={ctxValue}>
    {children}
  </CartContext.Provider>
}