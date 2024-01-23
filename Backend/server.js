//import the packages 
const express = require("express");
var cors = require("cors");
const dotenv = require('dotenv');
const paymentRoutes = require("./routes/payments");
//config env variables 
dotenv.config();
const PORT = process.env.PORT || 8000;
//create the app 
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/payment/", paymentRoutes);

app.listen(PORT, () => console.log(`App is listening on ${PORT}`));
