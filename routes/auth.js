const express = require('express');
const { register } = require('../controllers/auth');

// Create router
const router = express.Router();

router.post('/register', register);

module.exports = router;
