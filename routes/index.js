const express = require('express');
const router = express.Router();

router.use('/', require('./swaggerRoutes'));
router.use('/teams', require('./teamRoutes'));
router.use('/players', require('./playerRoutes'));

module.exports = router;