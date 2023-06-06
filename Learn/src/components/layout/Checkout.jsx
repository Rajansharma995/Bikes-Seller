import React from 'react';

const Checkout = () => {
  return (
    <section>
      <h2>Checkout</h2>
      <form>

        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <button>Place Order</button>
      </form>
    </section>
  );
}

export default Checkout;
