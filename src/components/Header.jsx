import { CartContext } from './../store/CartContext';
import { useRef, useContext } from 'react';
import Logo from './../assets/logo.jpg';
import Button from './UI/Button';
import CartModal from './CartModal';
export default function Header() {
  const cartModal = useRef();
  const checkOutModal = useRef()
  const cartCtx = useContext(CartContext);
  const totalCartItems = cartCtx.items.reduce((total, item) => total + item.quantity, 0);

  function handleOpenCartClick() {
    cartModal.current.open();
  }
  function handleOpenCheckOutClick() {
    checkOutModal.current.open();
  }
  let cartModalActions = <Button textOnly={false}>Close</Button>;
  if (totalCartItems > 0) {
    cartModalActions = (
      <>
        <Button textOnly={true}>Close</Button>
        <Button textOnly={false} onClick={handleOpenCheckOutClick}>Checkout</Button>
      </>
    );
  }
  let checkOutModalActions = <Button textOnly={false}>Close</Button>
  if (totalCartItems > 0) {
    checkOutModalActions = (
      <>
        <Button textOnly={true}>Cancel</Button>
        <Button type="submit" textOnly={false}>Submit Order</Button>
      </>
    )
  }
  return (
    <>
      <CartModal
        ref={checkOutModal}
        title='Checkout'
        actions={checkOutModalActions}
        type="Checkout"
      />
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