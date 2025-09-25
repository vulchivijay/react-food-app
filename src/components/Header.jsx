import Logo from './../assets/logo.jpg';
import Button from './UI/Button';
import { CartContext } from './../store/CartContext';
import { useContext } from 'react';

export default function Header() {
  const { items } = useContext(CartContext);
  return (
    <header id='main-header'>
      <div id='title'>
        <img src={Logo} alt='Food App' />
        <h1>Vijay's Restaurent</h1>
      </div>
      <Button textOnly={true}>Cart {items.length}</Button>
    </header>
  )
}