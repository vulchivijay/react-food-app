import { createContext, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  addItem: (item) => { },
  delItem: (id) => { },
  quantity: () => { },
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
  if (action.type === 'DEL_ITEM') {
    //
  }
  if (action.type === 'UPDATE_QUANTITY') {
    //
  }

  return state;
}

export default function CartContextProvider({ children }) {

  const [cartState, cartDispatch] = useReducer(cartReducer, {
    items: [],
  });

  function handleAddItem(item) {
    cartDispatch({
      type: 'ADD_ITEM',
      payload: item,
    })
  }

  function handleADelItem(id) {
    cartDispatch({
      type: 'DEL_ITEM',
      payload: id,
    })
  }

  function handleItemQuantity(productId, amount) {
    cartDispatch({
      type: 'UPDATE_QUANTITY',
      payload: {
        productId: productId,
        amount: amount,
      }
    })
  }

  const ctxValue = {
    items: cartState.items,
    addItem: handleAddItem,
    delItem: handleADelItem,
    quantity: handleItemQuantity
  }

  return <CartContext.Provider value={ctxValue}>
    {children}
  </CartContext.Provider>

}