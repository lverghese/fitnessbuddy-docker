const { Plan } = require('../models')

const planData = [
    {
        plan_name: 'Bulk',
    },
    {
        plan_name: 'Cut',
    },
    {
        plan_name: 'Tone',
    }

]

const seedPlan = () => Plan.bulkCreate(planData);

module.exports = seedPlan;