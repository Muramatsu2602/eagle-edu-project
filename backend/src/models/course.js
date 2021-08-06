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
  icon: {
    type: Sequelize.STRING(40),
    allowNull: false,
  },

  // !USE THIS IN CASE STUDENT GETS IMPLEMENTED
  // MANUAL WAY OF IMPLEMENTING A FOREIGN KEY
  // studentId: {
  //   allowNull: true,
  //   type: Sequelize.INTEGER,
  //   references: {
  //     model: 'student',
  //     key: 'id'
  //   }
  // }
});

// add Course id foreign key to all Subjects
Subject.belongsTo(Course, { foreignKey: "courseId" });
Course.hasMany(Subject, { foreignKey: "courseId" });

module.exports = Course;
