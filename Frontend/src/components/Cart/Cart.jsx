import React from "react";
import { useContext } from "react";
import { cartContext } from "../Utilities/context";
import Cartproduct from "./Cartproduct";
import axios from 'axios';


function Cart() {
  const cart = useContext(cartContext);
  const handlePayment = async () => {
    try {
      const orderUrl = "http://localhost:5000/api/payment/orders";
      const { data } = await axios.post(orderUrl, { amount: cart.getTotalCost().toFixed(2) });
      console.log(data);
      initPayment(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const initPayment = (data) => {
		const options = {
			key: "rzp_test_rEMvp9G69eq7Ym",
			amount: data.amount,
			currency: data.currency,
			description: "Test Transaction",
			order_id: data.id,
			handler: async (response) => {
				try {
					const verifyUrl = "http://localhost:5000/api/payment/verify";
					const { data } = await axios.post(verifyUrl, response);
					console.log(data);
				} catch (error) {
					console.log(error);
				}
			},
			theme: {
				color: "#3399cc",
			},
		};
		const rzp1 = new window.Razorpay(options);
		rzp1.open();
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
          <a href="#" class="cart-button" onClick={handlePayment}>
            Checkout
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cart;
