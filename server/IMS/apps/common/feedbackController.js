const {Feedback, User} = require('../../models/db');
const ResponseModel = require('../../utilities/responseModel');

module.exports.getAll = async (req, res) => {
    const user_id = req.user.id;
    const user = await User.findOne({
        where: {
            user_id: user_id
        }
    });
    if(!user){
        return res.status(404).json(new ResponseModel(null, null, ["User not found"]));
    }

    try {
        const feedbacks = await Feedback.findAll({
            where: {
                user_id: user.user_id
            }
        });
        res.json(new ResponseModel(feedbacks));
    } catch (error) {
        console.log(error);
        res.status(500).json(new ResponseModel(null, null, ["Unable to fetch data"]));
    }
}

module.exports.getOne = async (req, res) => {
    const id = req.params.id;
    const user_id = req.user.id;
    const user = await User.findOne({
        where: {
            user_id: user_id
        }
    });
    if(!user){
        return res.status(404).json(new ResponseModel(null, null, ["User not found"]));
    }

    try {
        const feedback = await Feedback.findOne({
            where: {
                feedback_id: id,
                user_id: user.user_id
            }
        });
        if (!feedback) {
            return res.status(404).json(new ResponseModel(null, null, ["Feedback not found"]));
        }
        res.json(new ResponseModel(feedback));
    } catch (error) {
        res.status(500).json(new ResponseModel(null, null, ["Unable to fetch data"]));
    }
}

module.exports.create = async (req, res) => {
    const {content} = req.body;
    const user_id = req.user.id;
    const user = await User.findOne({
        where: {
        user_id:user_id,
        }
    });
    if(!user){
        return res.status(404).json(new ResponseModel(null, null, ["User not found"]));
    }
   
    try {
        const createdFeedback = await Feedback.create({
            user_id: user.user_id,
            content: content
        });
        return res.json(new ResponseModel(createdFeedback));
    } catch (error) {
        res.status(500).json(new ResponseModel(null, null, ["Unable to create data"]));
    }
}

module.exports.delete = async (req, res) => {
    const id = req.params.id;
    const user_id = req.user.id;
    const user = await User.findOne({
        where: {
            user_id: user_id
        }
    });
    if(!user){
        return res.status(404).json(new ResponseModel(null, null, ["User not found"]));
    }

    try {
        const feedback = await Feedback.findOne({
            where: {
                feedback_id: id,
                user_id: user.user_id
            }
        });
        if (!feedback) {
            return res.status(404).json(new ResponseModel(null, null, ["Feedback not found"]));
        }
        await feedback.destroy();
        res.json(new ResponseModel(null, "Feedback deleted successfully"));
    }
    catch (error) {
        res.status(500).json(new ResponseModel(null, null, ["Unable to delete data"]));
    }
}