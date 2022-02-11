const jwt = require("jsonwebtoken");
const generateJWTtoken = (id) => {
  return jwt.sign({ id: id.toString() }, process.env.JWT_SECRET, {
    expiresIn: "3d",
  });
};

module.exports = generateJWTtoken;
