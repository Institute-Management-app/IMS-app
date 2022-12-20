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
    res.json(course);
  } catch (error) {
    res
      .status(500)
      .json(new ResponseModel(null, null, ["Unable to fetch data"]));
  }
};

module.exports.getOne = async (req, res) => {
  const id = req.params.id;
  try {
    const course = await Course.findByPk(id);
    if (!course) {
      return res
        .status(404)
        .json(new ResponseModel(null, null, ["Course not found"]));
    }
    res.json(new ResponseModel(course));
  } catch (error) {
    res
      .status(500)
      .json(new ResponseModel(null, null, ["Unable to fetch data"]));
  }
};

module.exports.update = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const { course_name, branch, semester, fees } = req.body;
  try {
    const course = await Course.findByPk(id);
    if (!course) {
      return res
        .status(404)
        .json(new ResponseModel(null, null, ["Course not found"]));
    }
    course.course_name = course_name;
    course.branch = branch;
    course.semester = semester;
    course.fees = fees;
    await course.save();
    res.json(new ResponseModel(course));
  } catch (error) {
    res
      .status(500)
      .json(new ResponseModel(null, null, ["Unable to update data"]));
  }
};

module.exports.delete = async (req, res) => {
  const id = req.params.id;

  try {
    const course = await Course.findByPk(id);
    if (!course) {
      return res
        .status(404)
        .json(new ResponseModel(null, null, ["Course not found"]));
    }
    await course.destroy();
    res.json(new ResponseModel(null, "Course deleted successfully"));
  } catch (error) {
    res
      .status(500)
      .json(new ResponseModel(null, null, ["Unable to delete data"]));
  }
};
