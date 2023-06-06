import React from 'react';
import ProductItem from './ProductItem.jsx';

const ProductList = ({ products }) => {
  return (
    <section>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </section>
  );
}

export default ProductList;
