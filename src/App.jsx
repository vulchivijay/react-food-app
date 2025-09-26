import Header from "./components/Header";
import FoodItems from "./components/FoodItems";
import CartContextProvider from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";
import { ToastContainer, Slide } from 'react-toastify';

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <FoodItems />
        <ToastContainer
          position="top-right"
          autoClose={1000}
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
    </UserProgressContextProvider>
  );
}

export default App;
