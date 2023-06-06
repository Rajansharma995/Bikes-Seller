import React from 'react';
import ProductList from '../components/layout/ProductList.jsx';
import '../assets/css/Home.css';

const Home = ({ products }) => {
  return (
    <div>
      <h2>Welcome to Bike Seller!</h2>
      <ProductList products={products} />
    </div>
  );
}

export default Home;
