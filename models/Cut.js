const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Cut extends Model {}


Cut.init(
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
    day_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 6,
        validate: {
            isNumeric: true
        }
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
        allowNull: false,
        defaultValue: 6,
        validate: {
            isNumeric: true
        }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'cut',
  }
);

module.exports = Cut;