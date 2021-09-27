const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Plan } = require('../models');

router.get('/', (req, res) => {
  Plan.findAll({
    attributes: [
      'plan_name'
    ]
  })
    .then(dbPlanData => {
      const plan = dbPlanData.map(post => post.get({ plain: true }));

      res.render('homepage', {
        plan,
        loggedIn: req.session.loggedIn
      });
    })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});


module.exports = router;