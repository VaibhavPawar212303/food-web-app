//sk_test_51OX3fOSE90z45ySNzRpFkQ9mPeKTyhogVO0r2x5kxKdA0AGNvKhhEwMiFTMgaWEOBewK8FwBc2biJrcxJ3zrGEVr006njNbtWz
//Dal_Khichadi :- price_1OXE34SE90z45ySNrOmzaUGy
//Fish_Thali :- price_1OXE4OSE90z45ySNZA05rAwE
//Chiken_Thali :- price_1OXE5OSE90z45ySNtwb9CSfQ

const express = require("express");
var cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51OX3fOSE90z45ySNzRpFkQ9mPeKTyhogVO0r2x5kxKdA0AGNvKhhEwMiFTMgaWEOBewK8FwBc2biJrcxJ3zrGEVr006njNbtWz"
);

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
  /*
     
    */
  const items = req.body.items;
  let lineItem = [];
  items.forEach((item) => {
    lineItem.push({
      price: item.id,
      quantity: item.quantity,
    });
  });
  const session = await stripe.checkout.sessions.create({
    line_items: lineItem,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });

  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

app.listen(5000, () => console.log("App is listening on 5000"));
