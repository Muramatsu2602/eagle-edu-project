const ck = require("ckey");

const dbName = ck.DB_NAME;
const userName = ck.DB_USER;
const password = ck.DB_PASSWORD;

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbName, userName, password, {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
