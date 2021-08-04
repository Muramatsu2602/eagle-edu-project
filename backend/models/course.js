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

// add Course id foreign key to all Subjects
Subject.belongsTo(Course, { foreignKey: "id_subject" });
Course.hasMany(Subject, { foreignKey: "id_subject" });

module.exports = Course;
