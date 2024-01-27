const client = require("../Config/db");
const jwt = require("jsonwebtoken");

const insertOrder = async (req, res) => {
  const { userID, order } = req.body;
  let cart = JSON.stringify(order);
  try {
    var query = `INSERT INTO orders (userID,ordercart) VALUES ('${userID}','${cart}');`;
    client.query(query, function (err, result) {
      if (err) throw err;
    });
  } catch (error) {
    console.log(error);
  }
};

const getOrder = async(req,res) => {
  const userid = "testuser001";
  try {
    var query = `SELECT * FROM orders WHERE userid = '${userid}';`;
    client.query(query, function (err, result) {
      if (err) throw err;
      res.status(200).json({
        orders: result.rows,
      });
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { insertOrder, getOrder };
