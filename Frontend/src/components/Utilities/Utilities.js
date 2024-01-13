const carddata = [
  {
    id: "price_1OXE34SE90z45ySNrOmzaUGy",
    imagepath: "foodimages/img_1.jpg",
    title: "Card Title",
    desc: "This is a sample card description.",
    price:100
  },
  {
    id:"price_1OXE4OSE90z45ySNZA05rAwE",
    imagepath: "foodimages/img_2.jpg",
    title: "Card Title",
    desc: "This is a sample card description.",
    price:100
  },
  {
    id: "price_1OXE5OSE90z45ySNtwb9CSfQ",
    imagepath: "foodimages/img_3.jpg",
    title: "Card Title",
    desc: "This is a sample card description.",
    price:100
  },
  {
    id: "price_1OXE34SE90z45ySNrOmzaUGy",
    imagepath: "foodimages/img_4.jpg",
    title: "Card Title",
    desc: "This is a sample card description.",
    price:100
  },
  {
    id: "price_1OXE34SE90z45ySNrOmzaUGy",
    imagepath: "foodimages/img_5.jpg",
    title: "Card Title",
    desc: "This is a sample card description.",
    price:100
  },
  {
    id: "price_1OXE34SE90z45ySNrOmzaUGy",
    imagepath: "foodimages/img_6.jpg",
    title: "Card Title",
    desc: "This is a sample card description.",
    price:100
  },
  {
    id: "price_1OXE34SE90z45ySNrOmzaUGy",
    imagepath: "foodimages/img_7.jpg",
    title: "Card Title",
    desc: "This is a sample card description.",
    price:100
  },
  {
    id: "price_1OXE34SE90z45ySNrOmzaUGy",
    imagepath: "foodimages/img_8.jpg",
    title: "Card Title",
    desc: "This is a sample card description.",
    price:100
  },
];

function getProductData(id) {
  let producdata = carddata.find((product) => product.id === id);
  if (producdata == undefined) {
    console.log("Product not found");
    return undefined;
  }
  return producdata;
}

export { carddata, getProductData };
