import { useState } from 'react'
import Logo from './../assets/logo.jpg'

export default function Header() {
  const [cartItemsCount, setCartItemsCount] = useState(0);
  return (
    <header id='main-header'>
      <div id='title'>
        <img src={Logo} alt='Food App' />
        <h1>Vijay's Restaurent</h1>
      </div>
      <button>Cart {cartItemsCount}</button>
    </header>
  )
}