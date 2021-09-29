//importing Models
const Exercise = require('./Exercise');
const Plan = require('./Plan');
const User = require('./User');
const Day = require('./Day');

Plan.hasMany(User, {
    foreignKey: 'plan_id'
})

User.belongsTo(Plan, {
    foreignKey: 'plan_id'
})

Plan.hasMany(Exercise, {
    foreignKey: 'workout_plan_id'
})

Exercise.belongsTo(Plan, {
    foreignKey: 'workout_plan_id'
})

Day.hasMany(Exercise, {
    foreignKey: "day_id"
})

Exercise.belongsTo(Day, {
    foreignKey: 'day_id'
})


module.exports = { User, Plan, Exercise, Day };
