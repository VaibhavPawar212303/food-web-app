const jwt = require("jsonwebtoken");
const client = require("../Config/db");

const createUser = async (req, res) => {
  const { username, email, password, address } = req.body;
  try {
    if (!username) {
      res.status(200).json({ message: "Please Add User Name" });
    } else if (!email) {
      res.status(200).json({ message: "Please Add Email" });
    } else if (!password) {
      res.status(200).json({ message: "Please Add Password" });
    } else if (!address) {
      res.status(200).json({ message: "Please Add address" });
    } else {
      try {
        var query = `SELECT * FROM userdetails 
             WHERE email = '${email}';`;
        client.query(query, function (err, result) {
          if (result.rows.length > 0) {
            res.status(400).json({
              message: "Please use another email this email is already used",
            });
          } else {
            try {
              var query = `INSERT INTO userdetails (name,email,password, address) VALUES ('${username}','${email}','${password}','${address}');`;
              client.query(query, function (err, result) {
                if (err) throw err;
                else {
                  try {
                    var query = `SELECT * FROM userdetails WHERE email = '${email}';`;
                    client.query(query, function (err, result) {
                      if (err) throw err;
                      res
                        .status(200)
                        .json({
                          user: result.rows[0],
                          message: "Account Created Successfully",
                        });
                    });
                  } catch (error) {
                    console.log(error);
                  }
                }
              });
            } catch (error) {
              console.log(error);
            }
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email) {
    res.status(200).json({ message: "Please Add Email" });
  } else if (!password) {
    res.status(200).json({ message: "Please Add Password" });
  } else {
    try {
      var query = `SELECT * FROM userdetails 
             WHERE email = '${email}';`;
      client.query(query, function (err, result) {
        if (err) throw err;
        const password = result.rows[0].password;
        if (password === password) {
          res.status(200).json({
            user: result.rows[0],
            token: generateToken(),
            message: "User Login Successfully",
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
};

//JWT Token Creation
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = { createUser, loginUser };
