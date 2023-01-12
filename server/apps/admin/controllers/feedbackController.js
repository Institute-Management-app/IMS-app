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
