import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../components/cart/CartProvider';

const TopBar = () => {

  const cartCtx = useContext(CartContext);
  const numItems = cartCtx.cartCount;

  return (
    <div className="layout top-bar">
      <div className="wrapper">
        <div className="section">My Store</div>
        <div className="section">
          <Link to='/'>Products</Link>
          <Link to='/cart'>View Cart ({numItems})</Link>
        </div>
      </div>
    </div>
  )
}

export default TopBar;