import Course from "../models/course";

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
    return res.status(200).send(courses);
  } catch (e) {
    console.log("ERRO: ", e);
    return res.status(404).send({ error });
  }
};