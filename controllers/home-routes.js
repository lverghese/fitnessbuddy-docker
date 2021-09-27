const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models');

//display possible workouts on homepage
router.get('/', (req, res) => {
  Plan.findAll({
    attributes: [
      'plan_name',
      'user_id'
    ],
    include: [
      {
        model: ,
        attributes: [ ],
        include: {
          model: User,
          attributes: [' ']
        }
      },
      {
        model: User,
        attributes: ['']
      }
    ]
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));

      res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn
      });
});

//verify cookies
router.get('/', (req, res) => {
  console.log(req.session);

});

//return to homepage 
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;