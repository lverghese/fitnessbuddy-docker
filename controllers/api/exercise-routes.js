const router = require('express').Router();
const { Exercise } = require('../../models');

router.get('/', (req, res) => {
    Exercise.findAll({})
      .then(dbExerciseData => res.json(dbExerciseData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.get('/:id', (req, res) => {
    Exercise.findOne({
        where: {
            id: req.params.id
          }
    })
      .then(dbExerciseData => res.json(dbExerciseData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.post('/', (req, res) => {
    /* expects 
{
"exercise_name": "",
"setLength": ,
"repLength": ,
"workout_plan_id": ,
"day_id": 
}
  */
    Exercise.create({
      exercise_name: req.body.exercise_name,
      setLength: req.body.setLength,
      repLength: req.body.repLength,
      workout_plan_id: req.body.workout_plan_id,
      day_id: req.body.day_id
    })
      .then(dbExerciseData => {
      res.json(dbExerciseData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;