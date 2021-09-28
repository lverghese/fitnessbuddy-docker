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
           })
       })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.get('/login', (req, res, err) => {
   if (req.session.loggedIn) {
    res.redirect('/');
     return;
   }  else {
   //console.log("logged in");
  res.render('login');
  }
});

// redirect to homepage is user is signed in
router.get('/signup', (req, res, err) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // if(err){
  //   console.log(err);
  // } else {
    res.render('signup');
  //}  
});

module.exports = router;
/**if(err){
    console.log(err);
  } else */

  //redirect user to dah once signed up