const router = require('express').Router();

const userRoutes = require('./user-routes.js');
//const exerciseRoutes = require('./exercise-routes');
const planRoutes = require('./plan-routes');
//const dayRoutes = require('./day-routes');

router.use('/users', userRoutes);
//router.use('/exercises', exerciseRoutes);

module.exports = router;