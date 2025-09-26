import Header from "./components/Header";
import FoodItems from "./components/FoodItems";
import CartContextProvider from "./store/CartContext";
import { ToastContainer, Slide } from 'react-toastify';

function App() {
  return (
    <CartContextProvider>
      <Header />
      <FoodItems />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        theme="light"
        transition={Slide}
      />
    </CartContextProvider>
  );
}

export default App;
