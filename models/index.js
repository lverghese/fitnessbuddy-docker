//importing Models
const Plan = require('./Plan');
const Day = require('./Day');
const Bulk = require('./Bulk');
const Cut = require('./Cut');
const Tone = require('./Tone');


Bulk.belongsTo(Plan, {
    foreignKey: 'plan_id'
})

Cut.belongsTo(Plan, {
    foreignKey: 'plan_id'
})

Tone.belongsTo(Plan, {
    foreignKey: 'plan_id'
})

Bulk.belongsTo(Day, {
    foreignKey: 'day_id'
})

Cut.belongsTo(Day, {
    foreignKey: 'day_id'
})

Tone.belongsTo(Day, {
    foreignKey: 'day_id'
})



//model associatios here
