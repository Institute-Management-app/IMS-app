const feedback = require('../common/feedbackController');
const profile = require('./controllers/profileController');
const express = require('express');
const router = express.Router();

router.get('/feedback', feedback.getAll);
router.get('/feedback/:id', feedback.getOne);
router.post('/feedback', feedback.create);
router.delete('/feedback/:id', feedback.delete);


router.post('/profile/update', profile.changePassword);
router.get('/profile', profile.getProfile);
router.get('/marks', profile.getMarks);

module.exports = router;