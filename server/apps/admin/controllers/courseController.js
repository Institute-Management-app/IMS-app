const { Course } = require("../../../model/models");
const ResponseModel = require("../../../utilities/responseModel");

module.exports.create = async (req, res) => {
  const { course_name, branch, semester, fees } = req.body;
  try {
    const course = await Course.create({
      course_name,
      branch,
      semester,
      fees,
    });
    return res.json(new ResponseModel(course));
  } catch (error) {
    res
      .status(500)
      .json(new ResponseModel(null, null, ["Unable to create data"]));
  }
};

module.exports.getAll = async (req, res) => {
  try {
    const course = await Course.findAll();
    console.log(course)
    res.json(new ResponseModel(course));
  } catch (error) {
    res
      .status(500)
      .json(new ResponseModel(null, null, ["Unable to fetch data"]));
  }
};
