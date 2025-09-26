import { CartContext } from './../store/CartContext';
import { useRef, useContext, useState } from 'react';
import Logo from './../assets/logo.jpg';
import Button from './UI/Button';
import CartModal from './CartModal';

export default function Header() {
  const cartModal = useRef();
  const [isCartOpen, setIsCartOpen] = useState(false)
  const cartCtx = useContext(CartContext);
  const totalCartItems = cartCtx.items.reduce((total, item) => total + item.quantity, 0);
  let cartModalActions = <Button textOnly={false}>Close</Button>;

  function handleOpenCartClick() {
    setIsCartOpen(true);
    cartModal.current.open();
  }

  function handleOpenCheckOutClick() {
    setIsCartOpen(false);
    // cartModal.current.open();
  }
  
  if (totalCartItems > 0) {
    cartModalActions = isCartOpen ? (
      <>
        <Button textOnly={true}>Close</Button>
        <Button textOnly={false} onClick={handleOpenCheckOutClick}>Checkout</Button>
      </>
    ) : (
      <>
        <Button textOnly={true}>Close</Button>
        <Button textOnly={false}>Submit Order</Button>
      </>
    );
  }

  return (
    <>
      <CartModal
        ref={cartModal}
        title={isCartOpen ? 'Your cart details:' : 'Checkout details:'}
        actions={cartModalActions}
        type={isCartOpen ? 'Cart' : 'Checkout' }
      />
      <header id='main-header'>
        <div id='title'>
          <img src={Logo} alt='Food App' />
          <h1>Vijay's Restaurent</h1>
        </div>
        <Button textOnly={true} onClick={handleOpenCartClick}>
          Cart ({totalCartItems})
        </Button>
      </header>
    </>
  )
}