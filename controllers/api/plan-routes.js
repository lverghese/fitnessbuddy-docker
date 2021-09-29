const router = require('express').Router();
const { Plan, Exercise } = require('../../models');

router.get('/', (req, res) => {
    Plan.findAll({
      include: [
        {
          model: Exercise,
          attributes: ['id', 'exercise_name']
        }
      ]
    })
      .then(dbPlanData => res.json(dbPlanData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.get('/:id', (req, res) => {
    Plan.findOne({
        where: {
            id: req.params.id
          }
    })
      .then(dbPlanData => res.json(dbPlanData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.post('/', (req, res) => {
    /* expects 
    {
  "plan_name": "Bulk",
  "user_id": 1
}
  */
    Plan.create({
      plan_name: req.body.plan_name,
      user_id: req.body.user_id
    })
      .then(dbPlanData => {
      //session save login since logged in???
      res.json(dbPlanData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;