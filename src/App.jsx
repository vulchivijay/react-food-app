import Header from "./components/Header";
import FoodItems from "./components/FoodItems";
import { useState } from "react";
import CartContextProvider from "./store/CartContext";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <FoodItems />
    </CartContextProvider>
  );
}

export default App;
