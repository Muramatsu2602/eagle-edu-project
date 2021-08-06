const Subject = require("../models/subject");

/**
 * creates a new Course
 * @param {*} req
 * @param {*} res
 */
exports.createSubject = async (req, res) => {
  try {
    const newSubject = await Subject.create({
      name: req.body.name,
      icon: req.body.icon,
      completionRate: req.body.completionRate,
      courseId: req.body.courseId
    });

    return res.status(201).json(newCourse);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({message: `Error when creating a new Subject for id of ID: ${req.body.courseId}`, error });
  }
};

/**
 * returns all Courses from the course table
 * @param {*} req
 * @param {*} res
 * @returns
 */
exports.getSubjectsByFk = async (req, res) => {
  try {
    const courses = await Course.findAll();

    console.log("All courses loaded");
    return res.status(200).json(courses);
  } catch (e) {
    console.log("ERRO: ", e);
    return res
      .status(400)
      .json({ message: "Error when retrieving all courses from DB", error });
  }
};
