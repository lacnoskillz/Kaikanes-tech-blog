const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homepageRoutes.js');
//require routes
//declare how to use them
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;