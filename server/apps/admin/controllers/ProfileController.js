const { User, Student, LoginCredentials,Parent } = require("../../../model/models");
const ResponseModel = require("../../../utilities/responseModel");

module.exports.viewAll = async (req, res) => {
  try {
    const user = await LoginCredentials.findAll({
      where: {
        role: "S",
      },
      include: [{ model: User, include: [Student] }],
    });
    res.json(new ResponseModel(user));
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(new ResponseModel(null, null, ["Unable to fetch data"]));
  }
};
module.exports.getAll = async (req, res) => {
  try {
    const user = await LoginCredentials.findAll({
      where: {
        role: "P",
      },
      include: [{ model: User, include: [Parent] }],
    });
    res.json(new ResponseModel(user));
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(new ResponseModel(null, null, ["Unable to fetch data"]));
  }
};
