//importing Models
const Exercise = require('./Exercise');
const Plan = require('./Plan');
const User = require('./User');
const Day = require('./Day');

Plan.belongsTo(User, {
    foreignKey: 'user_id'
})

Plan.hasMany(Exercise, {
    foreignKey: 'workout_plan_id'
})

Day.hasMany(Exercise, {
    foreignKey: "day_id"
})




module.exports = { User, Plan, Exercise, Day };
