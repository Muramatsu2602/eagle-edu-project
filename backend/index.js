(async () => {
  const database = require("./database/db");

  // creating the models
  const Course = require("./models/course");
  const Subject = require("./models/subject");
  const Mission = require("./models/mission");
  // const User = require("./models/user");

  await database.sync();
})();
