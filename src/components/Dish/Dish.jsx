import React from "react";

const carddata = [
  {
    imagepath: "foodimages/img_1.jpg",
    title: "Card Title",
    desc: "This is a sample card description.",
  },
  {
    imagepath: "foodimages/img_2.jpg",
    title: "Card Title",
    desc: "This is a sample card description.",
  },
  {
    imagepath: "foodimages/img_3.jpg",
    title: "Card Title",
    desc: "This is a sample card description.",
  },
  {
    imagepath: "foodimages/img_4.jpg",
    title: "Card Title",
    desc: "This is a sample card description.",
  },
  {
    imagepath: "foodimages/img_5.jpg",
    title: "Card Title",
    desc: "This is a sample card description.",
  },
  {
    imagepath: "foodimages/img_6.jpg",
    title: "Card Title",
    desc: "This is a sample card description.",
  },
  {
    imagepath: "foodimages/img_7.jpg",
    title: "Card Title",
    desc: "This is a sample card description.",
  },
  {
    imagepath: "foodimages/img_8.jpg",
    title: "Card Title",
    desc: "This is a sample card description.",
  },
];

function Dish() {
  return (
    <div className="container main">
      <div className="main-card-container">
        {/* define the card outer container */}
        {carddata.map((carddata) => (
          <div className="card-container">
            <div className="card-image">
              <img
                src={carddata.imagepath}
                alt="Card Image"
                class="card-image"
              />
            </div>
            <h2 class="card-title">{carddata.title}</h2>
            <p class="card-description">{carddata.desc}</p>
            <a href="#" class="card-button">
              Add To Cart
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dish;
