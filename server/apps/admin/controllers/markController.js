const { Model } = require("sequelize");

const { Mark,LoginCredentials,Student,User, Course} = require("../../../model/models");
const ResponseModel = require("../../../utilities/responseModel");

module.exports.create = async (req, res) => {
  const { user_id, course_id, mark } = req.body;
  try {
    const createdMark = await Mark.create({
      user_id,
      course_id,
      mark,
    });
    return res.json(new ResponseModel(createdMark));
  } catch (error) {
    res
      .status(500)
      .json(new ResponseModel(null, null, ["Unable to create data"]));
  }
};

module.exports.getAll = async (req, res) => {
  
  // try {
    const student = await LoginCredentials.findAll({
      where: {
        role:'S'
      },
      attributes : [],
      include: {
        model: User,
        required: true,
        attributes: ['name'],
        include :[{
          model : Student,
          required: true,
          attributes : ['branch']
        },
      {
        model : Mark,
        required: true,
        attributes : ['mark'],
        include :[{
          model : Course,
          required: true,
          attributes : ['course_id','course_name']
        }]
      }]
      }
 
    });   

    res.json(new ResponseModel(student));
};

