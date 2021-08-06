const Sequelize = require("sequelize");
const database = require("../database/db");
const Mission = require("./mission");

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
    type: Sequelize.STRING(40),
    allowNull: false,
  },
  completionRate: {
    type: Sequelize.DOUBLE,
    allowNull: false,
    defaultValue: 0.0,
  },
});

// add Subject id foreign key to all Missions
Mission.belongsTo(Subject, { foreignKey: "subjectId" });
Subject.hasMany(Mission, { foreignKey: "subjectId" });

module.exports = Subject;
