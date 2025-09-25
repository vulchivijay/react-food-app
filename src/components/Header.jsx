import { CartContext } from './../store/CartContext';
import { useRef, useContext } from 'react';
import Logo from './../assets/logo.jpg';
import Button from './UI/Button';
import CartModal from './CartModal';
export default function Header() {
  const modal = useRef();
  const { items } = useContext(CartContext);
  const cartQuantity = items.length;
  function handleOpenCartClick() {
    modal.current.open();
  }
  let modalActions = <Button>Close</Button>;
  if (cartQuantity > 0) {
    modalActions = (
      <>
        <Button>Close</Button>
        <Button>Checkout</Button>
      </>
    );
  }
  return (
    <>
      <CartModal
        ref={modal}
        title='Your cart'
        actions={modalActions}
      />
      <header id='main-header'>
        <div id='title'>
          <img src={Logo} alt='Food App' />
          <h1>Vijay's Restaurent</h1>
        </div>
        <Button textOnly={true} onClick={handleOpenCartClick}>
          Cart ({cartQuantity})
        </Button>
      </header>
    </>
  )
}