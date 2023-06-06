import React from 'react';
import '../../assets/css/Cart.css';
import { useNavigate } from 'react-router-dom';
const Cart = ({ cartItems }) => {
  const navigate = useNavigate();
  const navigatetocheckout=()=>{
    navigate('/cart/checkout');
  }
  return (
    <section>
      <h2>Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </li>
        ))}
      </ul>
      <button onClick={navigatetocheckout}>Checkout</button>
    </section>
  );
}

export default Cart;
