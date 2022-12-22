const { Feedback,User, Student } = require("../../../model/models");
const ResponseModel = require("../../../utilities/responseModel");

module.exports.getAll = async (req, res) => {
  try {
    const feedbacks = await Feedback.findAll({
      include:[
        {
          model:User
        }
      ]
      })
      res.json(new ResponseModel(feedbacks));
     
  } catch (error) {
    res
      .status(500)
      .json(new ResponseModel(null, null, ["Unable to fetch data"]));
  }
};

module.exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const feedback = await Feedback.findByPk(id);
    if (!feedback) {
      return res
        .status(404)
        .json(new ResponseModel(null, null, ["Feedback not found"]));
    }
    await feedback.destroy();
    res.json(new ResponseModel(null, "Feedback deleted successfully"));
  } catch (error) {
    res
      .status(500)
      .json(new ResponseModel(null, null, ["Unable to delete data"]));
  }
};
