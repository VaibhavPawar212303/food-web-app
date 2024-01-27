const express = require("express");
const router = express.Router();
const { insertOrder, getOrder } = require("../Controllers/orderController");

router.post("/", insertOrder);
router.get("/getorder", getOrder);

module.exports = router;
