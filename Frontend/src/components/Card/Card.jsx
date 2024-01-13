import React from "react";

function Card() {
  return (
    <div className="cheif-card">
      <img src="foodimages/img_1.jpg" alt="" />
      <div className="cheif-card-info">
        <h3 className="chief-card-name">Dummy user</h3>
        <p className="chief-recipe-count">
          Recipe: <b>10</b>
        </p>
        <p className="chief-cuisine">
          Cuisine:<b>Mexicon</b>
        </p>
      </div>
    </div>
  );
}

export default Card;
