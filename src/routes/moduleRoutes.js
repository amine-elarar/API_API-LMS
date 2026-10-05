const express = require('express');
const { get_modulesByCourseId } = require('../controllers/moduleController');

const router = express.Router();

router.get('/courses/:id/modules', get_modulesByCourseId);

module.exports = router;