const { Feedback } = require('../../../models/db');
const ResponseModel = require('../../../utilities/responseModel');

module.exports.getAll = async (req, res) => {
    try {
        const feedbacks = await Feedback.findAll();
        res.json(new ResponseModel(feedbacks));
    } catch (error) {
        res.status(500).json(new ResponseModel(null, null, ["Unable to fetch data"]));
    }
}

module.exports.getOne = async (req, res) => {
    const id = req.params.id;
    try {
        const feedback = await Feedback.findByPk(id);
        if (!feedback) {
            return res.status(404).json(new ResponseModel(null, null, ["Feedback not found"]));
        }
        res.json(new ResponseModel(feedback));
    } catch (error) {
        res.status(500).json(new ResponseModel(null, null, ["Unable to fetch data"]));
    }
}

module.exports.delete = async (req, res) => {
    const id = req.params.id;
    try {
        const feedback = await Feedback.findByPk(id);
        if (!feedback) {
            return res.status(404).json(new ResponseModel(null, null, ["Feedback not found"]));
        }
        await feedback.destroy();
        res.json(new ResponseModel(null, "Feedback deleted successfully"));
    } catch (error) {
        res.status(500).json(new ResponseModel(null, null, ["Unable to delete data"]));
    }
}