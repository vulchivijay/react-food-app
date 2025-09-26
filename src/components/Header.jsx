import { CartContext } from './../store/CartContext';
import { useRef, useContext } from 'react';
import Logo from './../assets/logo.jpg';
import Button from './UI/Button';
import CartModal from './CartModal';

export default function Header() {
  const cartModal = useRef();
  const cartCtx = useContext(CartContext);
  const totalCartItems = cartCtx.items.reduce((total, item) => total + item.quantity, 0);
  let cartModalActions = <Button textOnly={false}>Close</Button>;

  function handleOpenCartClick() {
    cartModal.current.open();
  }
  
  if (totalCartItems > 0) {
    cartModalActions = (
      <>
        <Button textOnly={true}>Close</Button>
        <Button textOnly={false} onClick={handleOpenCheckOutClick}>Checkout</Button>
      </>
    );
  }

  return (
    <>
      <CartModal
        ref={cartModal}
        title='Your cart'
        actions={cartModalActions}
        type="Cart"
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