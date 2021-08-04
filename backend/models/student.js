const Sequelize = require("sequelize");
const database = require("../database/db");
const Course = require("./course");

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
    unique: true,
  },
  password: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
});

// // add Subject id foreign key to all Missions
// Course.belongsTo(Student, { foreignKey: "id_course" });
// Student.hasMany(Course, { foreignKey: "id_course" });

module.exports = Student;
