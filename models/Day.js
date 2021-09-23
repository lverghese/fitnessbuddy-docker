const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Day extends Model {}

Day.init(
  {
    // define columns
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
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