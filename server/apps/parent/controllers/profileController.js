const {
  User,
  Parent,
  Mark,
  LoginCredentials,
  Course
} = require("../../../model/models");
const ResponseModel = require("../../../utilities/responseModel");

module.exports.getProfile = async (req, res) => {
  const login_id = req.user.id;
  console.log(login_id);
  const user = await User.findOne({
    where: {
      user_id: login_id,
    },
    include: Parent,
  });
  if (!user) {
    return res
      .status(404)
      .json(new ResponseModel(null, null, ["User not found"]));
  }

  res.json(new ResponseModel([user]));
};

module.exports.getMarks = async (req, res) => {
  const user_id = req.user.id
  const student = await User.findOne({
    where: {
      relation: req.user.id,
    },
    include: {
      model:Mark,
      include: {
        model:Course
      }
    }
  });

  res.json(new ResponseModel([student]));
};

module.exports.changePassword = async (req, res) => {
  const { password } = req.body;
  const user_id = req.user.id;
  console.log(user_id);
  try {
    const parent = await LoginCredentials.findOne({
      where: {
        user_id: user_id,
        role: "P",
      },
    });
    console.log(parent.password);

    parent.password = password;
    console.log(password);
    await parent.save();
    res.json(new ResponseModel(parent));
  } catch (error) {
    res.status(500).json(new ResponseModel(null, null, ["Parent not found"]));
  }
};
