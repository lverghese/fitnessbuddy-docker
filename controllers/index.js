const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');


router.use('/api', apiRoutes);

//use localhost:3001 as home route
router.use('/', homeRoutes);

router.use((req, res) => {
    res.status(404).end();
  });

module.exports = router;

