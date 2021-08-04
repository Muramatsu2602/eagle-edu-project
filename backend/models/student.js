const Sequelize = require("sequelize");
const database = require("../database/db");

const Student = database.define("student", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  fullName: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING(100),
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
});

Student.hasMany(Course, { as: "Courses" });

module.exports = Student;
