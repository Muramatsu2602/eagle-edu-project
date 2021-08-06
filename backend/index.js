/**
 * creates the models for the database
 */
(async () => {
  const database = require("./src/database/db");

  // creating the models
  const Course = require("./src/models/course");
  const Subject = require("./src/models/subject");
  const Mission = require("./src/models/mission");
  // const Student = require("./models/student");
  await database.sync({ force: true });
})();
