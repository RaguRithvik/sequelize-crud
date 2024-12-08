const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/dbconfig");
const User = sequelize.define(
  "user",
  {
    // Define the model attributes
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    phone: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    paranoid: true,
    freezeTableName:true
  }
);
module.exports = User 