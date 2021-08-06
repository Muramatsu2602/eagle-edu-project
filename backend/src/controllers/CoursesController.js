const Course = require("../models/course");

/**
 * creates a new Course
 * @param {*} req
 * @param {*} res
 */
exports.createCourse = async (req, res) => {
  try {
    const newCourse = await Course.create({
      name: req.body.name,
      icon: req.body.icon,
    });

    return res.status(201).json(newCourse);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: "Error when creating a new Course", error });
  }
};

/**
 * returns all Courses from the course table
 * @param {*} req
 * @param {*} res
 * @returns
 */
exports.getCourses = async (req, res) => {
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

/**
 * returns a Course given its id
 * @param {*} req
 * @param {*} res
 * @returns
 */
exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findByPk(req.body.id);

    console.log("course loaded");
    return res.status(200).json(course);
  } catch (e) {
    console.log("ERRO: ", e);
    return res
      .status(400)
      .json({ message: "Error when retrieving course from DB", error });
  }
};
