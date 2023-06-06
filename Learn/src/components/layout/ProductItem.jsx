import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductItem = ({ product }) => {

  const navigate = useNavigate();
  const navigatetocart=()=>{
    navigate('/cart')
  }
  return (
    <li>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button onClick={navigatetocart}>Add to Cart</button>
    </li>
  );
}

export default ProductItem;
