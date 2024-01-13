import React from "react";
const list = [
  "This is the dummy list",
  "This is the dummy list",
  "This is the dummy list",
  "This is the dummy list",
  "This is the dummy list",
];
function Middlesection() {
  return (
    <div className="section middlesection">
      <div className="col img">
        <img src="foodimages/img_1.jpg" alt="No image" />
      </div>
      <div className="col typography">
        <h1 className="title">This is the dummy title</h1>
        {list.map((item) => (
          <p className="list-item">{item}</p>
        ))}
        <button className="btn">Signup Now</button>
      </div>
    </div>
  );
}

export default Middlesection;
