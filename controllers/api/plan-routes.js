const router = require('express').Router();
const { Plan } = require('../../models');

//=======================================
//WAITING ON PLAN MODEL TO TEST
//======================================
router.get('/', (req, res) => {
    // Access our User model and run .findAll() method)
    Plan.findAll({

    })
      .then(dbPlanData => res.json(dbPlanData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.get('/:id', (req, res) => {
    // Access our User model and run .findAll() method)
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

//new plan at api/plan/
//...next route something like api/plan/workout_choice? or whatever it's called
router.post('/', (req, res) => {
    /* expects 
    {
  "workout": "Bulk"
}
  */
    Plan.create({
      //add plan to user obj in current session
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