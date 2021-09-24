const {exercises} = require ('../models')

const exercisesData = [
    {
        exercise_data: "day 1",
        muscle: "back"
    },
    {
        exercise_data: "day 2",
        muscle: "shoulder"
    },
    {
        exercise_data: "day 3",
        muscle: "legs"
    },
    {
        exercise_data: "day 4",
        muscle: "arms"
    },
    {
        exercise_data: "day 5",
        muscle: "chest"
    }

]

const seedExercises = () => Exercises.bulkCreate(exercisesData);

module.exports = seedExercises;
