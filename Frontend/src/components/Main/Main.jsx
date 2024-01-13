import React from "react";
import Customimage from "../Customimge/Customimage";
const images = [
  "foodimages/img_1.jpg",
  "foodimages/img_2.jpg",
  "foodimages/img_3.jpg",
  "foodimages/img_4.jpg",
  "foodimages/img_5.jpg",
  "foodimages/img_6.jpg",
  "foodimages/img_7.jpg",
  "foodimages/img_8.jpg",
  "foodimages/img_9.jpg",
];

function Main() {
  return (
    <div className="section hero">
      <div className="col typography">
        <h1 className="title">This is the dummy title</h1>
        <p className="info">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <button className="btn">Exolore More</button>
      </div>
      <div className="col gallery">
        {images.map((src, index) => (
          <Customimage key={index} imgSrc={src} pt={"75%"} />
        ))}
      </div>
    </div>
  );
}

export default Main;
