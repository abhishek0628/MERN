const express = require('express');
const router = express.Router();

// Middleware just for this router
router.use((req, res, next) => {
  console.log(`User Router: ${req.method} ${req.url}`);
  next();
});

// GET /user/profile
router.get('/profile', (req, res) => {
  res.send('User Profile');
});

// GET /user/settings
router.get('/settings', (req, res) => {
  res.send('User Settings');
});

module.exports = router;
