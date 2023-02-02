const router = require('express').Router();
const commentRoutes = require('./commentRoutes');
const userRoutes = require('./userRoutes');

//declare and require routes in api
router.use('/users', userRoutes);
router.use('/comment', commentRoutes);


module.exports = router;
