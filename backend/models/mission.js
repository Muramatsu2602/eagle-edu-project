const Sequelize = require("sequelize");
const database = require("../database/db");

const Mission = database.define("mission", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING(300),
    allowNull: false,
  },
  isCompleted: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
});

module.exports = Mission;