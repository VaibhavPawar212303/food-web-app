const express = require('express');
const router = express.Router();
const { orders, verify } = require('../Controllers/paymentsController');
router.post("/orders", orders);
router.post("/verify", verify);
module.exports = router;