const { Plan } = require('../models')

const planData = [
    {
        plan_name: 'Bulk',
        // user_id: 1
    },
    {
        plan_name: 'Cut',
        // user_id: 2
    },
    {
        plan_name: 'Tone',
        // user_id: 3
    }

]

const seedPlan = () => Plan.bulkCreate(planData);

module.exports = seedPlan;