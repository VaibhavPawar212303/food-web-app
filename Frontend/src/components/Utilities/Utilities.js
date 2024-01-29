const carddata = [
  {
    id: "testproduct01",
    imagepath: "foodimages/img_1.jpg",
    title: "Surmai Thali",
    desc: "This is a sample card description.",
    price:100
  },
  {
    id:"testproduct02",
    imagepath: "foodimages/img_2.jpg",
    title: "Bangda Thali",
    desc: "This is a sample card description.",
    price:100
  },
  {
    id: "testproduct03",
    imagepath: "foodimages/img_3.jpg",
    title: "Prawns Thali",
    desc: "This is a sample card description.",
    price:100
  },
  {
    id: "testproduct04",
    imagepath: "foodimages/img_4.jpg",
    title: "Surmai Plate",
    desc: "This is a sample card description.",
    price:100
  },
  {
    id: "testproduct05",
    imagepath: "foodimages/img_5.jpg",
    title: "Fish Curry Rice",
    desc: "This is a sample card description.",
    price:100
  },
  {
    id: "testproduct06",
    imagepath: "foodimages/img_6.jpg",
    title: "Surmai Thali",
    desc: "This is a sample card description.",
    price:100
  },
  {
    id: "testproduct07",
    imagepath: "foodimages/img_7.jpg",
    title: "Prawns Biryani",
    desc: "This is a sample card description.",
    price:100
  },
  {
    id: "testproduct08",
    imagepath: "foodimages/img_8.jpg",
    title: "Pomplet",
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
