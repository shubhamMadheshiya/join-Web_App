const jwt = require("jsonwebtoken");
const keys = require("../config/keys")
const generateToken = (id) => {
  return jwt.sign({ id }, keys.jwt.secret, {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
