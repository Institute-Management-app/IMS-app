const {
  User,
  Student,
  Mark,
  LoginCredentials,
} = require("../../../model/models");
const ResponseModel = require("../../../utilities/responseModel");

module.exports.getProfile = async (req, res) => {
  const login_id = req.user.id;

  const user = await User.findOne({
    where: {
      user_id: login_id,
    },
    include: Student,
  });
  if (!user) {
    return res
      .status(404)
      .json(new ResponseModel(null, null, ["User not found"]));
  }

  res.json(new ResponseModel(user));
};

module.exports.getMarks = async (req, res) => {
  const user_id = req.user.id;
  const user = await User.findOne({
    where: {
      user_id: user_id,
    },
  });

  const marks = await Mark.findAll({
    where: {
      user_id: user.user_id,
    },
  });

  res.json(new ResponseModel(marks));
};

module.exports.changePassword = async (req, res) => {
  const { password } = req.body;
  const user_id = req.user.id;
  console.log(user_id);
  try {
    const student = await LoginCredentials.findOne({
      where: {
        user_id: user_id,
        role: "S",
      },
    });

    student.password = password;
    await student.save();
    res.json(new ResponseModel(student));
  } catch (error) {
    res.status(500).json(new ResponseModel(null, null, ["Student not found"]));
  }
};
