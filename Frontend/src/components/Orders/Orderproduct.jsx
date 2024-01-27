import React from "react";
import { useContext } from "react";
import { cartContext } from "../Utilities/context";
import { getProductData } from "../Utilities/Utilities";

function Orderproduct(props) {
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
      </div>
    </div>
  );
}

export default Orderproduct;
