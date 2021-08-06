/**
 * creates the models for the database
 */
(async () => {
  // creating the models
  const database = require("./database/db");

  const Course = require("./models/course");
  const Subject = require("./models/subject");
  const Mission = require("./models/mission");
  // const Student = require("./models/student");

  await database.sync({ force: true });
})();
