import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import Cart from './Cart';
import CheckOutForm from './CheckOutForm';
import SuccessMessage from './SuccessMessage';

const CartModal = forwardRef(function Modal({ title, actions, type, modalId }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
      close: () => {
        dialog.current.close();
      }
    };
  });

  return createPortal(
    <dialog className="modal cart" ref={dialog}>
      <h2>{title}</h2>
      {type === 'Cart' && <Cart actions={actions} />}
      {type === 'Checkout' && <CheckOutForm actions={actions} /> }
      {type === 'Success' && <SuccessMessage actions={actions} message="Your order will be delievered on time!" /> }
    </dialog>,
    document.getElementById(modalId),
  );
});

export default CartModal;