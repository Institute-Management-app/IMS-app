const admin = require('./controllers/register');
const course = require('./controllers/courseController');
const mark = require('./controllers/markController');
const feedback = require('./controllers/feedbackController');
const studentProfile = require('./controllers/studentProfileController');
const express = require('express');
const router = express.Router();

router.post('/student/create', admin.registerUser);
router.get('/student/profile', studentProfile.viewAll);
router.post('/student/profile/:id', studentProfile.updateStudent);


router.post('/course/create', course.create);
router.post('/course/', course.getAll);
router.post('/course/:id', course.getOne);
router.post('/course/update/:id', course.update);
router.post('/course/delete/:id', course.delete);

router.post('/mark/create', mark.create);
router.post('/mark/', mark.getAll);
router.post('/mark/:id', mark.getOne);
router.post('/mark/update/:id', mark.update);
router.post('/mark/delete/:id', mark.delete);

router.post('/feedback/', feedback.getAll);
router.post('/feedback/:id', feedback.getOne);

module.exports = router;