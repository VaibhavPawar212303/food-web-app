import React from "react";
import { carddata } from "../Utilities/Utilities";
import Dish from "./Dish";
function Dishpage() {
  return (
    <div className="container main">
      <div className="main-card-container">
        {carddata.map((product, idx) => (
          <Dish product={product} />
        ))}
      </div>
    </div>
  );
}

export default Dishpage;
