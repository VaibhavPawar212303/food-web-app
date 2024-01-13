import React from "react";
import { useContext } from "react";
import { cartContext } from "../Utilities/context";
import Cartproduct from "./Cartproduct";

function Cart() {
  const cart = useContext(cartContext);
  const checkout = async () => {
    await fetch("http://localhost:5000/checkout", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        items: cart.items,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url);
        }
      });
  };

  return (
    <div className="container main">
      <div className="card-container">
        <div className="card-title">Your Cart</div>
        {cart.items.map((cartItem, idx) => (
          <Cartproduct
            key={idx}
            id={cartItem.id}
            quantity={cartItem.quantity}
          ></Cartproduct>
        ))}
        <div className="cart-container">
          <h2 class="card-title">Total Price</h2>
          <p class="card-description">₹{cart.getTotalCost().toFixed(2)}</p>
          <a href="#" class="cart-button" onClick={checkout}>
            Checkout
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cart;
