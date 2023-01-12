const parentProfile = require("./controllers/profileController");
const feedbackController = require("../common/feedbackController");
const express = require("express");
const router = express.Router();

router.get("/profile", parentProfile.getProfile);
router.get("/marks", parentProfile.getMarks);

router.post("/profile/update", parentProfile.changePassword);

router.get("/feedback", feedbackController.getAll);
router.get("/feedback/:id", feedbackController.getOne);
router.post("/feedback", feedbackController.create);
router.delete("/feedback/:id", feedbackController.delete);

module.exports = router;
