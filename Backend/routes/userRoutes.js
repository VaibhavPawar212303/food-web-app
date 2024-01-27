const express = require('express');
const { createUser, loginUser } = require('../Controllers/userControllers');
const router = express.Router();

router.post("/createuser", createUser);
router.post("/loginuser", loginUser);

module.exports = router;