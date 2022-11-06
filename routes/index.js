const express = require('express');
const router = express.Router();
const { requiresAuth } = require('express-openid-connect');

router.use('/', require('./swaggerRoutes'));
router.use('/teams', requiresAuth(), require('./teamRoutes'));
router.use('/players', requiresAuth(), require('./playerRoutes'));

module.exports = router;