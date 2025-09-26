import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import Cart from './Cart';
import CheckOutForm from './CheckOutForm';

const CartModal = forwardRef(function Modal({ title, actions, type }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog className="modal cart" ref={dialog}>
      <h2>{title}</h2>
      {type === 'Cart' ? <Cart actions={actions} /> : <CheckOutForm actions={actions} />}
    </dialog>,
    (type === 'Cart') ? document.getElementById('cartModal') : document.getElementById('checkOutModal')
  );
});

export default CartModal;