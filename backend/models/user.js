const Sequelize = require("sequelize");
const database = require("../database/db");

const User = database.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
});
