import { CartContext } from './../store/CartContext';
import { useRef, useContext, useState } from 'react';
import Logo from './../assets/logo.jpg';
import Button from './UI/Button';
import CartModal from './CartModal';

export default function Header() {
  const cartModal = useRef();
  const checkoutModal = useRef();
  const orderCompleted = useRef();
  const cartCtx = useContext(CartContext);
  const totalCartItems = cartCtx.items.reduce((total, item) => total + item.quantity, 0);
  let cartModalActions, checkoutModalAction, successModalAction =
  <Button textOnly={false} onClick={() => handleCloseClick(orderCompleted) }>Close</Button>;

  function handleOpenCartClick() {
    cartModal.current.open();
  }

  function handleCheckOutClick() {
    handleCloseClick(cartModal);
    checkoutModal.current.open();
  }

  function handleSubmitClick() {
    handleCloseClick(checkoutModal);
    orderCompleted.current.open();
  }

  function handleCloseClick(modalRef) {
    modalRef.current.close();
  }
  
  if (totalCartItems > 0) {
    cartModalActions = (
      <>
        <Button textOnly={true} onClick={() => handleCloseClick(cartModal) }>Close</Button>
        <Button textOnly={false} onClick={handleCheckOutClick}>Checkout</Button>
      </>
    );
    checkoutModalAction = (
      <>
        <Button textOnly={true} onClick={() => handleCloseClick(checkoutModal) }>Close</Button>
        <Button textOnly={false} onClick={handleSubmitClick}>Submit Order</Button>
      </>
    );
  }

  return (
    <>
      <CartModal
        ref={cartModal}
        title='Your cart details:'
        actions={cartModalActions}
        type='Cart'
        modalId="cartModal"
      />
      <CartModal
        ref={checkoutModal}
        title='Checkout details:'
        actions={checkoutModalAction}
        type='Checkout'
        modalId="checkoutModal"
      />
      <CartModal ref={orderCompleted}
        title="Your order successfully completed!"
        actions={successModalAction}
        type="Success"
        modalId="successModal"
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