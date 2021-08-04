(async () => {
  const database = require("./database/db");

  // creating the models
  const Course = require("./models/course");
  const Subject = require("./models/subject");
  const Mission = require("./models/mission");
  // const Student = require("./models/student");
  await database.sync({ force: true });

  //   const newCourse = await Course.create({
  //     name: "Algebra III",
  //   });

  //   const newSubject = await Subject.create({

  //   });
})();
