(async () => {
  const database = require("./database/db");

  // creating the models
  const Course = require("./models/course");
  const Subject = require("./models/subject");
  const Mission = require("./models/mission");
  // const Student = require("./models/student");
  await database.sync({ force: true });

  const newCourse = await Course.create({
    name: "Algebra III",
  });

  const courseNeeded = await Course.findOne({ where: { name: "Algebra III" } });

  const newSubject = await Subject.create({
    name: "Subject 1",
    icon: "<FaIcons.FaCheck size={80} />",
    completionRate: 10.4,
    courseId: courseNeeded.id,
  });

  const newSubject2 = await Subject.create({
    name: "Subject 2",
    icon: "<FaIcons.FaCheck size={80} />",
    completionRate: 65.4,
    courseId: courseNeeded.id,
  });

  // read
  const subjectList = await Subject.findAll();
  console.log(subjectList);


  // update
  newSubject2.name= "Subject II is edited :)";
  newSubject2.save();

  // delete
  newSubject2.destroy();

})();
