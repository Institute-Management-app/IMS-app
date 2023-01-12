const { LoginCredentials, User } = require("../../../model/models.js");
const ResponseModel = require("../../../utilities/responseModel");
const tokenHandler = require("../../../utilities/tokenHandler");

module.exports.login = function (req, res) {
  LoginCredentials.findOne({ where: { email: req.body.email } })
    .then((result) => {
      if (result.dataValues.password == req.body.password) {
        if (result.dataValues.role == "S") {
          // Generate token
          var token = tokenHandler.createToken({
            id: result.dataValues.user_id,
            email: result.dataValues.email,
            role: "S",
          });
          return res.json(new ResponseModel(token, "Login successful"));
        } else if (result.dataValues.role == "P") {
          // Generate token
          var token = tokenHandler.createToken({
            id: result.dataValues.user_id,
            email: result.dataValues.email,
            role: "P",
          });
          return res.json(new ResponseModel(token, "Login successful"));
        } else if (result.dataValues.role == "A") {
          // Generate token
          var token = tokenHandler.createToken({
            id: result.dataValues.user_id,
            email: result.dataValues.email,
            role: "A",
          });
          return res.json(new ResponseModel(token, "Login successful"));
        }
      } else {
        return res.json(new ResponseModel("Invalid credentials"));
      }
    })
    .catch((err) => {
      //USER DOESNOT exist
      return res.json(new ResponseModel("User does not exist"));
    });
};

// Register user
module.exports.createAdmin = async (req, res) => {

  // Create user
  var user = await User.create({
    name: "Admin",
    role: "A",
    dob: "1999-01-01",
    address: "Admin address",
    phone: "1234567890",
  });

  login = await LoginCredentials.create({
    email: "admin@admin.com",
    password: "Pass@123",
    role: "A",
    user_id: user.user_id,
  });

  return res.json(new ResponseModel(null, "Admin created successfully"));
};
