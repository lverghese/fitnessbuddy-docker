const { Exercise } = require ('../models')

const exercisesData = [
    {
        exercise_name: 'Barbell Squats',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 1,
        day_id: 1
    },
    {
        exercise_name: 'Leg Extensions',
        setLength: 4,
        repLength: 15,
        workout_plan_id: 1,
        day_id: 1
    },
    {
        exercise_name: 'Stiff Legged Deadlifts',
        setLength: 4,
        repLength: 10,
        workout_plan_id: 1,
        day_id: 1
    },
    {
        exercise_name: 'Leg Press',
        setLength: 5,
        repLength: 12,
        workout_plan_id: 1,
        day_id: 1
    },
    {
        exercise_name: 'Bench Press',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 1,
        day_id: 2
    },
    {
        exercise_name: 'Incline Dumbbell Flys',
        setLength: 4,
        repLength: 15,
        workout_plan_id: 1,
        day_id: 2
    },
    {
        exercise_name: 'Machine Chest Press',
        setLength: 4,
        repLength: 12,
        workout_plan_id: 1,
        day_id: 2
    },
    {
        exercise_name: 'Neutral Cable Flys',
        setLength: 5,
        repLength: 15,
        workout_plan_id: 1,
        day_id: 2
    },
    {
        exercise_name: 'Deadlifts',
        setLength: 3,
        repLength: 8,
        workout_plan_id: 1,
        day_id: 3
    },
    {
        exercise_name: 'Close-grip Cable Rows',
        setLength: 5,
        repLength: 15,
        workout_plan_id: 1,
        day_id: 3
    },
    {
        exercise_name: 'Lat Pulldowns',
        setLength: 4,
        repLength: 10,
        workout_plan_id: 1,
        day_id: 3
    },
    {
        exercise_name: 'Bend-Over Barbell Rows',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 1,
        day_id: 3
    },
    {
        exercise_name: 'Overhead Military Press',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 1,
        day_id: 4
    },
    {
        exercise_name: 'Lateral Flys',
        setLength: 4,
        repLength: 10,
        workout_plan_id: 1,
        day_id: 4
    },
    {
        exercise_name: 'Front Dumbbell Raises',
        setLength: 4,
        repLength: 12,
        workout_plan_id: 1,
        day_id: 4
    },
    {
        exercise_name: 'Rear-Delt Dumbbell Flys',
        setLength: 4,
        repLength: 10,
        workout_plan_id: 1,
        day_id: 4
    },
    {
        exercise_name: 'Alternating Dumbbell Curls',
        setLength: 4,
        repLength: 15,
        workout_plan_id: 1,
        day_id: 5
    },
    {
        exercise_name: 'Rope Tricep Pushdowns',
        setLength: 4,
        repLength: 15,
        workout_plan_id: 1,
        day_id: 5
    },
    {
        exercise_name: 'Cable Rope Hammer Curls',
        setLength: 4,
        repLength: 12,
        workout_plan_id: 1,
        day_id: 5
    },
    {
        exercise_name: 'Barbell Skullcrushers',
        setLength: 4,
        repLength: 10,
        workout_plan_id: 1,
        day_id: 5
    },
    {
        exercise_name: 'Barbell Squats',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 2,
        day_id: 1
    },
    {
        exercise_name: 'Leg Extensions',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 2,
        day_id: 1
    },
    {
        exercise_name: 'Barbell Squats',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 2,
        day_id: 1
    },
    {
        exercise_name: 'Barbell Squats',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 2,
        day_id: 1
    },
    {
        exercise_name: 'Bench Press',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 2,
        day_id: 2
    },
    {
        exercise_name: 'Barbell Squats',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 2,
        day_id: 2
    },
    {
        exercise_name: 'Barbell Squats',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 2,
        day_id: 2
    },
    {
        exercise_name: 'Barbell Squats',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 2,
        day_id: 2
    },
    {
        exercise_name: 'Deadlifts',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 2,
        day_id: 3
    },
    {
        exercise_name: 'Barbell Squats',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 2,
        day_id: 3
    },
    {
        exercise_name: 'Barbell Squats',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 2,
        day_id: 3
    },
    {
        exercise_name: 'Barbell Squats',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 2,
        day_id: 3
    },
    {
        exercise_name: 'Overhead Military Press',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 2,
        day_id: 4
    },
    {
        exercise_name: 'Barbell Squats',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 2,
        day_id: 4
    },

    {
        exercise_name: 'Barbell Squats',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 2,
        day_id: 4
    },
    {
        exercise_name: 'Barbell Squats',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 2,
        day_id: 4
    },
    {
        exercise_name: 'Alternating Dumbbell Curls',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 2,
        day_id: 5
    },
    {
        exercise_name: 'Barbell Squats',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 2,
        day_id: 5
    },
    {
        exercise_name: 'Barbell Squats',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 2,
        day_id: 5
    },
    {
        exercise_name: 'Barbell Squats',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 2,
        day_id: 5
    },
    {
        exercise_name: 'Barbell Squats',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 3,
        day_id: 1
    },
    {
        exercise_name: 'Leg Extensions',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 3,
        day_id: 1
    },
    {
        exercise_name: 'Barbell Squats',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 3,
        day_id: 1
    },
    {
        exercise_name: 'Barbell Squats',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 3,
        day_id: 1
    },
    {
        exercise_name: 'Bench Press',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 3,
        day_id: 2
    },
    {
        exercise_name: 'Barbell Squats',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 3,
        day_id: 2
    },
    {
        exercise_name: 'Barbell Squats',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 3,
        day_id: 2
    },
    {
        exercise_name: 'Barbell Squats',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 3,
        day_id: 2
    },
    {
        exercise_name: 'Deadlifts',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 3,
        day_id: 3
    },
    {
        exercise_name: 'Barbell Squats',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 3,
        day_id: 3
    },
    {
        exercise_name: 'Barbell Squats',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 3,
        day_id: 3
    },
    {
        exercise_name: 'Barbell Squats',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 3,
        day_id: 3
    },
    {
        exercise_name: 'Overhead Military Press',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 3,
        day_id: 4
    },
    {
        exercise_name: 'Barbell Squats',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 3,
        day_id: 4
    },

    {
        exercise_name: 'Barbell Squats',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 3,
        day_id: 4
    },
    {
        exercise_name: 'Barbell Squats',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 3,
        day_id: 4
    },
    {
        exercise_name: 'Alternating Dumbbell Curls',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 3,
        day_id: 5
    },
    {
        exercise_name: 'Barbell Squats',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 3,
        day_id: 5
    },
    {
        exercise_name: 'Barbell Squats',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 3,
        day_id: 5
    },
    {
        exercise_name: 'Barbell Squats',
        setLength: 4,
        repLength: 8,
        workout_plan_id: 3,
        day_id: 5
    }

]

const seedExercises = () => Exercise.bulkCreate(exercisesData);

module.exports = seedExercises;
