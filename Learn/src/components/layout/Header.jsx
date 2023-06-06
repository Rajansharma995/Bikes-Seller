import React from 'react';
import '../../assets/css/Header.css';
const Header = () => {
  return (
    <header>
      <h1>Bike Seller</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/cart">Cart</a></li>
          <li><a href='/home'>Bikes</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
