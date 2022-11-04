const { DataTypes } = require("sequelize");

const sequelize = require("../utils/database");

const Works = sequelize.define("Works", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  url: {
    
    type: DataTypes.TEXT,
    allowNull: false,
    defaultValue: "#",
  },
  pt: {
    type: DataTypes.INTEGER(5),
    allowNull: false,
    defaultValue: 0,
  },
});

module.exports = Works;
