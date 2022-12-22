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

module.exports.updateStudent = async (req, res) => {
  const id = req.params.id;
  const { phone, address, semester, branch } = req.body;
  try {
    const user = await User.findOne({
      where: {
        user_id: id,
        role: "Student",
      },
      include: Student,
    });
    console.log(user);
    if (!user) {
      return res
        .status(404)
        .json(new ResponseModel(null, null, ["Student not found"]));
    }

    (user.phone = phone), (user.address = address), await user.save();
    res.json(new ResponseModel(user));
  } catch (error) {
    res
      .status(500)
      .json(new ResponseModel(null, null, ["Unable to update data"]));
  }
};
