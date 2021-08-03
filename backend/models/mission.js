const Sequelize = require("sequelize");
const database = require("../database/db");

const Mission = database.define("mission", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
});
