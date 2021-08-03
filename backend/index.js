(async () => {
  const database = require("./database/db");

  // creating the models
  const Course = require("./models/course");
  const Subject = require("./models/subject");
  const Mission = require("./models/mission");

  await database.sync();
})();
