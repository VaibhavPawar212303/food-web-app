import React, { useState } from "react";
import { useContext } from "react";
import { cartContext } from "../Utilities/context";
import axios from "axios";
import Cartproduct from "../Cart/Cartproduct";
import Orderproduct from "./Orderproduct";

function Orders() {
  const [order, setOrder] = useState([]);

  //get all order of user
  axios({
    method: "get",
    url: "https://food-delivery-api-production-1cdc.up.railway.app/api/order/getorder",
  }).then(function (res) {
    setOrder(res.data.orders);
  });

  return (
    <div className="container main">
      <div className="card-container">
        <div className="card-title">Your Order History</div>
        {order.map((items) => (
          <div className="card-container">
            <div>Order ID : {items.orderid}</div>
            {items.ordercart.items.map((order) => (
              <Orderproduct
                key={items.orderid}
                id={order.id}
                quantity={order.quantity}
              ></Orderproduct>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
