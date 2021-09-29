const router = require('express').Router();
const sequelize = require('../config/connection');
const { Plan, User, Exercise, Day } = require('../models');
const withAuth = require('../utils/auth');

//took out withAuth for testing
//user/:id
router.get('/',  (req, res) => {
  // Dashboard should get one user's profile
  // user's profile should have one plan associated with it
  // plans will have multiple exercises spanning across days
  Plan.findOne({
    where: {
      id: req.session.plan_id
    },
    include: [
      {
        model: Exercise,
        attributes: ['exercise_name', 'day_id'],
        include: [
          {
            model: Day,
            attributes: ['day_name']
          }
        ]
      }
    ]
  })
  .then(dbPlanData => {
    if(!dbPlanData){
      res.status(404).json({ message: 'No plan data for this user' });
      return;
    }
    //res.json(dbPlanData);
    const plan = dbPlanData.map(plan => plan.get({ plain: true }));
    res.render('dashboard', {plan, loggedIn: true });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;



/**User.findOne({
    attributes: { exclude: ['password'] },
     where: {
       //id: req.session.user
       id: req.session.id,
     },
    include: [
      { 
        model: Plan,
        attributes: ['id', 'plan_name'],
        where: {
          //id: User.plan_id 
          id: req.session.plan_id
      },
        include: [
          {
            model: Exercise,
            attributes: ['exercise_name', 'day_id'],
            include: [
              {
                model: Day,
                attributes: ['day_name']
              }
            ]
          }
        ]
      }
    ]
  })
  .then(dbUserData => {
    if (!dbUserData) {
      //console.log(req.session.id);
      res.status(404).json({ message: 'No plan data for this user' });
      return;
    } 
    res.json(dbUserData);
    //const plan = dbUserData.map(plan => plan.get({ plain: true }));
    //res.render('dashboard', {plan, loggedIn: true });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  }); */