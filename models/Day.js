const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Day extends Model {}

Day.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    day_name: {
        type: DataTypes.STRING
    }
  },
  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'day',
  }
);

module.exports = Day;