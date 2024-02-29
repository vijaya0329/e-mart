import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CardContext'

const Navbar = () => {
  const {cartItems} = useCart()
  return (
    <div className='navSection'>
      <div className="title">
            <h2>E-Mart</h2>
             </div>
        <div className="subMenu">
      <ul>
        <Link to='/mobiles'>
        <li>Mobiles</li>
        </Link>
        <Link to='/computers'>
        <li>Computers</li>
        </Link>
        <Link to='/watches'>
        <li>Watches</li>
        </Link>
        <Link to='/women'>
        <li>Women</li>
        </Link>
        <Link to='/men'>
        <li>Men</li>
        </Link>
        <Link to='/furnatuer'>
        <li>Furnatuer</li>
        </Link>
        </ul>
     </div>
     <div className="search">
        <input type='text' placeholder='search...'/>
     </div>
     <div className="user">
        <div className="user-details">
            SignIN/SignUP
        </div>
        <Link to = '/cart'>
        <div className="cart">Cart
        <span>
          {cartItems.length}
        </span>
        </div>
        </Link>
     </div>
     
    </div>
  )
}

export default Navbar