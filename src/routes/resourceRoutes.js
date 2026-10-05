const express = require('express');
const { get_resourcesByModuleId } = require('../controllers/resourceController');

const router = express.Router();

router.get('/modules/:id/resources', get_resourcesByModuleId);

module.exports = router;