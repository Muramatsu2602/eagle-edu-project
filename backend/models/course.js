const Sequelize = require("sequelize");
const database = require("../database/db");
const Subject = require("./subject");

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
  },
});

Course.hasMany(Subject, { as: "Subjects" });

module.exports = Course;
