const { Plan } = require('../models')

const planData = [
    {
        plan_name: 'Bulk',
        workout_plan_id: "1",
        workout_id: "1",
    },
    {
        plan_name: 'Cut',
        workout_plan_id: "2",
        workout_id: "2",
    },
    {
        plan_name: 'tone',
        workout_plan_id: "3",
        workout_id: "3",
    }

]

const seedPlan = () => Plan.bulkCreate(planData);

module.exports = seedPlan;