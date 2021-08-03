const Sequelize = require("sequelize");
const database = require("../database/db");

const Course = database.define("course", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING(100),
    allowNull: false,
  }
  //TODO: add N subjects per course
});

module.exports = Course;