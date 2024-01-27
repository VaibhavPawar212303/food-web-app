//import the packages 
const express = require("express");
var cors = require("cors");
const dotenv = require('dotenv');
const connect = require("./Config/db");
const paymentRoutes = require("./routes/payments");
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orders');

//config env variables 
dotenv.config();
const PORT = process.env.PORT || 8000;
//create the app 
var app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/payment/", paymentRoutes);
app.use("/api/user/", userRoutes);
app.use("/api/order/", orderRoutes);

app.listen(PORT, () => console.log(`App is listening on ${PORT}`));
