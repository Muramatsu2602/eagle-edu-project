const Sequelize = require("sequelize");
const database = require("../database/db");

const Subject = database.define("subject", {
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
  icon: {
    type: Sequelize.STRING(30),
    allowNull: false,
  },
  completionRate: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    defaultValue: 0.0,
  },
  //TODO: add N missions per subject
});

module.exports = Subject;