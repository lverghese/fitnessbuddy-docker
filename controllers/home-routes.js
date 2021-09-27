const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Plan } = require('../models');


router.get('/', (req, res) => {
  Plan.findAll({
    attributes: [
      'plan_name'
    ],
    include: [
      {//user_id
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
    })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
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