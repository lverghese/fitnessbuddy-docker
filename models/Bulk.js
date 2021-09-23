const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Bulk extends Model {}


Bulk.init(
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
        allowNull: false
    },
    repLength: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    plan_id: {
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
    modelName: 'bulk',
  }
);

module.exports = Bulk;