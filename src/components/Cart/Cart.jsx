import React from "react";

function Cart() {
  return (
    <div className="container main">
      <div className="card-container">
        <div className="card-title">Your Cart</div>
        <div className="cart-container">
          <img src="foodimages/img_1.jpg" alt="test" className="cart-image" />
          <div>
            <h2 class="card-title">Dummy Title</h2>
            <p class="card-description">This is a dummy dish</p>
            <p class="card-description">Price :- $ 10.5</p>
          </div>
          <a href="#" class="cart-button">
            Remove
          </a>
        </div>
        <div className="cart-container">
          <img src="foodimages/img_1.jpg" alt="test" className="cart-image" />
          <div>
            <h2 class="card-title">Dummy Title</h2>
            <p class="card-description">This is a dummy dish</p>
            <p class="card-description">Price :- $ 10.5</p>
          </div>
          <a href="#" class="cart-button">
            Remove
          </a>
        </div>
        <div className="cart-container">
          <img src="foodimages/img_1.jpg" alt="test" className="cart-image" />
          <div>
            <h2 class="card-title">Dummy Title</h2>
            <p class="card-description">This is a dummy dish</p>
            <p class="card-description">Price :- $ 10.5</p>
          </div>
          <a href="#" class="cart-button">
            Remove
          </a>
        </div>
        <div className="cart-container">
          <h2 class="card-title">Total Price</h2>
          <p class="card-description">$ 30.15</p>
          <a href="#" class="cart-button">
            Checkout
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cart;
