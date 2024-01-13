import React from "react";
import { useContext } from "react";
import { cartContext } from "../Utilities/context";
import { Button, Form, Row, Col, Navbar } from "react-bootstrap";

function Dish(props) {
  const product = props.product;
  const cart = useContext(cartContext);
  const productQuantity = cart.getProductQuantity(product.id);
  return (
    <div className="card-container" key={product.id}>
      <div className="card-image">
        <img src={product.imagepath} alt="Card Image" class="card-image" />
      </div>
      <h2 class="card-title">{product.title}</h2>
      <p class="card-description">{product.desc}</p>
      {productQuantity > 0 ? (
        <>
          <Form as={Row}>
            <Form.Label column="true" sm="6">
              In cart : {productQuantity}
              <Col sm="6">
                <Button
                  sm="6"
                  className="mx-4 add-cart-button"
                  onClick={() => {
                    cart.addOneToCart(product.id);
                  }}
                >
                  +
                </Button>
                <Button
                  sm="5"
                  className="mx-4"
                  onClick={() => {
                    cart.removeOneFromCart(product.id);
                  }}
                >
                  -
                </Button>
              </Col>
            </Form.Label>
          </Form>
          <Button
            variant="danger"
            className="my-2 delete-cart-button"
            onClick={() => {
              cart.deleteFromCart(product.id);
            }}
          >
            Delete From Cart
          </Button>
        </>
      ) : (
        <a
          href="#"
          class="card-button"
          onClick={() => {
            cart.addOneToCart(product.id);
          }}
        >
          Add To Cart
        </a>
      )}
    </div>
  );
}

export default Dish;
