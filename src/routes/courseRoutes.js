const express = require('express');
const { get_courses , get_coursE } = require('../controllers/courseController.js');

const router = express.Router();

// router.get('/', (request, response) => {
//     response.json({ message: "heu" });
// });

router.get('/', get_courses);
router.get('/:id', get_coursE);

module.exports = router;