import React, { useState } from 'react';
import {  Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header.jsx';
import Home from './Pages/Home.jsx';
import ProductDetails from './Pages/ProductDetails.jsx';
import Cart from './components/layout/Cart.jsx';
import Checkout from './components/layout/Checkout.jsx';
import UserLogin from './components/User/UserLogin.jsx';
import UserRegister from './components/User/UserRegister.jsx';
import './App.css';

const App = () => {
  // Sample product data
  const [products] = useState([
    {
      id: 1,
      name: 'Mountain Bike',
      price: '$999',
      description: 'A high-quality mountain bike for off-road adventures.',
    },
    {
      id: 2,
      name: 'Road Bike',
      price: '$799',
      description: 'A lightweight road bike for smooth and fast rides.',
    },
    // Add more products here
  ]);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    
      <div>
        <Header />
        <Routes>
        
        <Route exact path="/bikes" element={<Home products={products} />} />
  



        <Route exact path="/product/:id" element={<ProductDetails products={products} addToCart={addToCart} />} />

        <Route exact path="/cart" element={<Cart cartItems={cartItems} />} />
        <Route exact path="/cart/checkout" element={<Checkout />} />

        <Route exact path='/' element={<UserLogin/>}/>
        <Route exact path='/register' element={<UserRegister/>}/>


        
        </Routes>
      </div>
    
  );
}

export default App;
