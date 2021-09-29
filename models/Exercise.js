const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Exercise extends Model {}

// set up fields and rules for Product model
Exercise.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    exercise_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    setLength: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isNumeric: true
        }
    },
    repLength: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 10,
        validate: {
            isNumeric: true
        }
    },
    workout_plan_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'plan',
            key: 'id'
        }
    },
    day_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'day',
            key: 'id'
        }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'exercise',
  }
);

module.exports = Exercise;