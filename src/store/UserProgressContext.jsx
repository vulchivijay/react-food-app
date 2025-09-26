import { createContext, useState } from "react";

const UserProgressContext = createContext({
  progress: '',
  showCart: () => { },
  hideCart: () => { },
  showCheckOut: () => { },
  hideCheckOut: () => { },
});

export function UserProgressContextProvider({ children }) {
  const [userProgress, setUserProgress] = useState('');
  function showCart() {
    setUserProgress('cart');
  }
  function hideCart() {
    setUserProgress('');
  }
  function showCheckOut() {
    setUserProgress('checkout');
  }
  function hideCheckOut() {
    setUserProgress('');
  }

  const userProgressCtx = {
    progress: userProgress,
    showCart,
    hideCart,
    showCheckOut,
    hideCheckOut,
  }

  return (
    <UserProgressContextProvider value={userProgressCtx}>
      {children}
    </UserProgressContextProvider>
  );
}