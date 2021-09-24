const router = require('express').Router();

const userRoutes = require('./user-routes');
const goalRoutes = require('./goal-routes');
const exercisesRoutes = require('./exercise-routes');

router.use('/users', userRoutes);
router.use('/goals', postRoutes);
router.use('/exercises', exerciseRoutes);

module.exports = router;