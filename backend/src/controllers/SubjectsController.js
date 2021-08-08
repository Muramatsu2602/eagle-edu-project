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
      courseId: req.body.courseId,
    });

    return res.status(201).json(newSubject);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: `Error when creating a new Subject for id of ID: ${req.body.courseId}`,
      error,
    });
  }
};

/**
 * returns all Subjects from a given courseId
 * @param {*} req
 * @param {*} res
 * @returns
 */
exports.getSubjectsByFk = async (req, res) => {
  try {
    const subjects = await Subject.findAll({
      where: { courseId: req.body.courseId },
    });

    console.log(`All subject of the given courseId loaded`);
    return res.status(200).json(subjects);
  } catch (e) {
    console.log("ERRO: ", e);
    return res.status(400).json({
      message:
        "Error when retrieving all subjects of the given courseId from DB",
      error,
    });
  }
};

/**
 * returns a Subject given its id
 * @param {*} req
 * @param {*} res
 * @returns
 */
exports.getSubjectById = async (req, res) => {
  try {
    const subject = await Subject.findByPk(req.body.id);

    console.log("subject loaded");
    return res.status(200).json(subject);
  } catch (e) {
    console.log("ERRO: ", e);
    return res
      .status(400)
      .json({ message: "Error when retrieving subject from DB", error });
  }
};

/**
 * updates the completionRate value of a given subject id
 * @param {*} req id from Subject, new value for completionRate
 * @param {*} res
 * @returns
 */
exports.updateProgressById = async (req, res) => {
  try {
    const subject = await Subject.findByPk(req.body.id);
    subject.completionRate = req.body.completionRate;

    const result = await subject.save();
    
    console.log("subject updated successfully");
    return res
      .status(200)
      .json({ message: "Successfully updated progress value!", result });
  } catch (e) {
    console.log("ERRO: ", e);
    return res.status(400).json({
      message: "Error when updating subject progress value from DB",
      error,
    });
  }
};
