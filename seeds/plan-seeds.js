const { Plan } = require('../models')

const planData = [
    {
        plan_name: 'Bulk'
    },
    {
        plan_name: 'Tone'
    },
    {
        plan_name: 'Cut'
    }

]

const seedPlan = () => Plan.bulkCreate(planData);

module.exports = seedPlan;