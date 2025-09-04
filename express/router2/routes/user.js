const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/profile', userController.getProfile);
router.get('/settings', userController.getSettings);

module.exports = router;
