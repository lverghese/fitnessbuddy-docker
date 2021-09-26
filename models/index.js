//importing Models
const Plan = require('./Plan');
const User = require('./User');


Bulk.belongsTo(Plan, {
    foreignKey: 'plan_id'
})

Cut.belongsTo(Plan, {
    foreignKey: 'plan_id'
})

Tone.belongsTo(Plan, {
    foreignKey: 'plan_id'
})



module.exports = { User };
//model associatios here
