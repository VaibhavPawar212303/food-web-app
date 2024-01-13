import React from "react";
import { useContext } from "react";
import { cartContext } from "../Utilities/context";
import { getProductData } from "../Utilities/Utilities";

function Cartproduct(props) {
  const cart = useContext(cartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);
  return (
    <div>
      <div className="cart-container">
        <img src={productData.imagepath} alt="test" className="cart-image" />
        <p class="card-title">{productData.title}</p>
        <p class="card-description">{productData.desc}</p>
        <p>Quantity: {quantity}</p>
        <a
          href="#"
          class="cart-button"
          onClick={() => {
            cart.deleteFromCart(productData.id);
          }}
        >
          Remove
        </a>
      </div>
    </div>
  );
}

export default Cartproduct;
