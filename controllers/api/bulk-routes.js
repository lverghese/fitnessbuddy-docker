const router = require('express').Router();
const { Bulk } = require('../../models');

router.get('/', (req, res) => {
    // Access our User model and run .findAll() method)
    Bulk.findAll()
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.get('/:id', (req, res) => {
    // Access our User model and run .findAll() method)
    Bulk.findOne({
        where: {
            id: req.params.id
          }
    })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  //new bulk obj posted when ...?
router.post('/', (req, res) => {
    /* expects 
    {
  "exercise_name": " ", 
  "setLength": " ",
  "repLength": " ",
  "plan_id": " ",
  "day_id": " "
}
  */
    Bulk.create({
      exercise_name: req.body.exercise_name,
      setLength: req.body.setLength,
      repLength: req.body.repLength,
      //not sure since these are referenced
      plan_id:  req.body.plan_id,
      day_id: req.body.day_id
    })
      .then(dbUserData => {
      //session save login since logged in???
      res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;