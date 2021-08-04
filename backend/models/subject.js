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
    type: Sequelize.STRING(30),
    allowNull: false,
  },
  completionRate: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    defaultValue: 0.0,
  },
});

// add Subject id foreign key to all Missions
Mission.belongsTo(Subject, { foreignKey: "id_mission" });
Subject.hasMany(Mission, { foreignKey: "id_mission" });

module.exports = Subject;
