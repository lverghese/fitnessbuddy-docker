const router = require('express').Router();
const { Day } = require('../../models');

router.get('/', (req, res) => {
    Day.findAll({})
      .then(dbDayData => res.json(dbDayData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.get('/:id', (req, res) => {
    Day.findOne({
        where: {
            id: req.params.id
          }
    })
      .then(dbDayData => res.json(dbDayData))
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
    Day.create({
      day_name: req.body.day_name
    })
      .then(dbDayData => {
      res.json(ddDayData);
      })
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;