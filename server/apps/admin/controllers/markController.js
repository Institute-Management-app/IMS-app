const { Mark } = require("../../../model/models");
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
  const user_id = req.params.id;
  try {
    const marks = await Mark.findAll({
      where: {
        user_id,
      },
    });
    res.json(new ResponseModel(marks));
  } catch (error) {
    res
      .status(500)
      .json(new ResponseModel(null, null, ["Unable to fetch data"]));
  }
};

module.exports.getOne = async (req, res) => {
  const id = req.params.id;
  try {
    const mark = await Mark.findByPk(id);
    if (!mark) {
      return res
        .status(404)
        .json(new ResponseModel(null, null, ["Mark not found"]));
    }
    res.json(new ResponseModel(mark));
  } catch (error) {
    res
      .status(500)
      .json(new ResponseModel(null, null, ["Unable to fetch data"]));
  }
};

module.exports.update = async (req, res) => {
  console.log("111");
  const id = req.params.id;
  const { mark } = req.body;
  try {
    const marks = await Mark.findByPk(id);
    if (!marks) {
      return res
        .status(404)
        .json(new ResponseModel(null, null, ["Mark not found"]));
    }

    marks.mark = mark;
    await marks.save();
    res.json(new ResponseModel(marks));
  } catch (error) {
    res
      .status(500)
      .json(new ResponseModel(null, null, ["Unable to update data"]));
  }
};

module.exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const mark = await Mark.findByPk(id);
    if (!mark) {
      return res
        .status(404)
        .json(new ResponseModel(null, null, ["Mark not found"]));
    }
    await mark.destroy();
    res.json(new ResponseModel(null, null, ["Deleted successfully"]));
  } catch (error) {
    res
      .status(500)
      .json(new ResponseModel(null, null, ["Unable to delete data"]));
  }
};
