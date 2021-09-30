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
        exercise_name: 'Box Squats',
        setLength: 3,
        repLength: 15,
        workout_plan_id: 2,
        day_id: 1
    },
    {
        exercise_name: 'Walking Lunges',
        setLength: 3,
        repLength: 20,
        workout_plan_id: 2,
        day_id: 1
    },
    {
        exercise_name: 'Leg Extensions',
        setLength: 4,
        repLength: 20,
        workout_plan_id: 2,
        day_id: 1
    },
    {
        exercise_name: 'Romanian Deadlifts',
        setLength: 3,
        repLength: 15,
        workout_plan_id: 2,
        day_id: 1
    },
    {
        exercise_name: 'Incline DB Press',
        setLength: 4,
        repLength: 15,
        workout_plan_id: 2,
        day_id: 2
    },
    {
        exercise_name: 'Seated Cable Flys',
        setLength: 4,
        repLength: 15,
        workout_plan_id: 2,
        day_id: 2
    },
    {
        exercise_name: 'Incline Machine Press',
        setLength: 4,
        repLength: 12,
        workout_plan_id: 2,
        day_id: 2
    },
    {
        exercise_name: 'Incline DB Flys',
        setLength: 4,
        repLength: 15,
        workout_plan_id: 2,
        day_id: 2
    },
    {
        exercise_name: 'Deadlifts',
        setLength: 4,
        repLength: 12,
        workout_plan_id: 2,
        day_id: 3
    },
    {
        exercise_name: 'Close-Grip Cable Rows',
        setLength: 4,
        repLength: 15,
        workout_plan_id: 2,
        day_id: 3
    },
    {
        exercise_name: 'Lat Pulldowns',
        setLength: 4,
        repLength: 12,
        workout_plan_id: 2,
        day_id: 3
    },
    {
        exercise_name: 'Dumbbell Rows',
        setLength: 4,
        repLength: 15,
        workout_plan_id: 2,
        day_id: 3
    },
    {
        exercise_name: 'Shoulder DB Press',
        setLength: 4,
        repLength: 15,
        workout_plan_id: 2,
        day_id: 4
    },
    {
        exercise_name: 'Lateral Flys',
        setLength: 4,
        repLength: 20,
        workout_plan_id: 2,
        day_id: 4
    },

    {
        exercise_name: 'Upright Rows',
        setLength: 4,
        repLength: 15,
        workout_plan_id: 2,
        day_id: 4
    },
    {
        exercise_name: 'Rear-Delt Flys',
        setLength: 4,
        repLength: 15,
        workout_plan_id: 2,
        day_id: 4
    },
    {
        exercise_name: 'Alternating Dumbbell Curls',
        setLength: 4,
        repLength: 20,
        workout_plan_id: 2,
        day_id: 5
    },
    {
        exercise_name: 'Triangle Tricep Pushdowns',
        setLength: 4,
        repLength: 15,
        workout_plan_id: 2,
        day_id: 5
    },
    {
        exercise_name: 'Rope Hammer Curls',
        setLength: 4,
        repLength: 15,
        workout_plan_id: 2,
        day_id: 5
    },
    {
        exercise_name: 'Underhand Tricep Pulldowns',
        setLength: 4,
        repLength: 15,
        workout_plan_id: 2,
        day_id: 5
    },
    {
        exercise_name: 'Barbell Front Squats',
        setLength: 4,
        repLength: 12,
        workout_plan_id: 3,
        day_id: 1
    },
    {
        exercise_name: 'Smith-Machine Squats',
        setLength: 4,
        repLength: 15,
        workout_plan_id: 3,
        day_id: 1
    },
    {
        exercise_name: 'Leg Press',
        setLength: 4,
        repLength: 15,
        workout_plan_id: 3,
        day_id: 1
    },
    {
        exercise_name: 'DB Lunges',
        setLength: 4,
        repLength: 20,
        workout_plan_id: 3,
        day_id: 1
    },
    {
        exercise_name: 'Bench Press',
        setLength: 4,
        repLength: 12,
        workout_plan_id: 3,
        day_id: 2
    },
    {
        exercise_name: 'Incline Chest Press',
        setLength: 5,
        repLength: 12,
        workout_plan_id: 3,
        day_id: 2
    },
    {
        exercise_name: 'Incline Cable Flys',
        setLength: 4,
        repLength: 15,
        workout_plan_id: 3,
        day_id: 2
    },
    {
        exercise_name: 'Pec Deck',
        setLength: 4,
        repLength: 15,
        workout_plan_id: 3,
        day_id: 2
    },
    {
        exercise_name: 'Power Cleans',
        setLength: 4,
        repLength: 12,
        workout_plan_id: 3,
        day_id: 3
    },
    {
        exercise_name: 'Barbell Rows',
        setLength: 4,
        repLength: 15,
        workout_plan_id: 3,
        day_id: 3
    },
    {
        exercise_name: 'Lat Pushdowns',
        setLength: 4,
        repLength: 15,
        workout_plan_id: 3,
        day_id: 3
    },
    {
        exercise_name: 'Dumbbell Rows',
        setLength: 4,
        repLength: 12,
        workout_plan_id: 3,
        day_id: 3
    },
    {
        exercise_name: 'Overhead Barbell Press',
        setLength: 4,
        repLength: 10,
        workout_plan_id: 3,
        day_id: 4
    },
    {
        exercise_name: 'Lateral Flys',
        setLength: 4,
        repLength: 12,
        workout_plan_id: 3,
        day_id: 4
    },

    {
        exercise_name: 'DB Front Raises',
        setLength: 4,
        repLength: 12,
        workout_plan_id: 3,
        day_id: 4
    },
    {
        exercise_name: 'DB Shoulder Press',
        setLength: 4,
        repLength: 15,
        workout_plan_id: 3,
        day_id: 4
    },
    {
        exercise_name: 'DB Hammer Curls',
        setLength: 4,
        repLength: 15,
        workout_plan_id: 3,
        day_id: 5
    },
    {
        exercise_name: 'Skullcrushers',
        setLength: 4,
        repLength: 12,
        workout_plan_id: 3,
        day_id: 5
    },
    {
        exercise_name: 'Barbell Curls',
        setLength: 4,
        repLength: 12,
        workout_plan_id: 3,
        day_id: 5
    },
    {
        exercise_name: 'Overhead DB Tricep',
        setLength: 4,
        repLength: 15,
        workout_plan_id: 3,
        day_id: 5
    }

]

const seedExercises = () => Exercise.bulkCreate(exercisesData);

module.exports = seedExercises;
