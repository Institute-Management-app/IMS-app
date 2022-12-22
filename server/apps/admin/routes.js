const admin = require("./controllers/register");
const course = require("./controllers/courseController");
const mark = require("./controllers/markController");
const feedback = require("./controllers/feedbackController");
const profile = require("./controllers/ProfileController");
const express = require("express");
const router = express.Router();

router.post("/user/create", admin.registerUser);
router.get("/student/profile", profile.viewAll);
router.get("/parent/profile", profile.getAll);


router.post("/course/create", course.create);
router.get("/course", course.getAll);
router.get("/course/:id", course.getOne);
router.get("/course/update/:id", course.update);
router.post("/course/update/:id", course.update);
router.post("/course/delete/:id", course.delete);

router.post("/mark/create", mark.create);
router.get("/mark/:id", mark.getOne);
router.post("/mark/update/:id", mark.update);
router.post("/mark/delete/:id", mark.delete);

router.get("/feedback", feedback.getAll);

module.exports = router;
