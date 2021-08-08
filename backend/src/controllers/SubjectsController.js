const { sequelize } = require("../models/subject");
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
      attributes: {
        include: [
          [
            // creates a new property in subjects that contains the number of
            // missions of this subject
            sequelize.literal(`(
                    SELECT COUNT(id)
                    FROM missions AS m
                    WHERE
                        m.subjectId = subject.id
                )`),
            "allMissions",
          ],
          [
            // creates a new property in subjects that contains the number of
            // completed missions in this subject
            sequelize.literal(`(
                    SELECT COUNT(id)
                    FROM missions AS m
                    WHERE
                        m.subjectId = subject.id
                        AND
                        m.isCompleted = 1
                )`),
            "completedMissions",
          ],
        ],
      },
      where: { courseId: req.body.courseId },
    });

    console.log(`All subjects of the given courseId have been loaded`);
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
    const subject = await Subject.findOne({
      attributes: {
        include: [
          [
            // creates a new property in subjects that contains the number of
            // missions of this subject
            sequelize.literal(`(
                  SELECT COUNT(id)
                  FROM missions AS m
                  WHERE
                      m.subjectId = subject.id
              )`),
            "allMissions",
          ],
          [
            // creates a new property in subjects that contains the number of
            // completed missions in this subject
            sequelize.literal(`(
                  SELECT COUNT(id)
                  FROM missions AS m
                  WHERE
                      m.subjectId = subject.id
                      AND
                      m.isCompleted = 1
              )`),
            "completedMissions",
          ],
        ],
      },
      where: req.body.id,
    });

    console.log("subject loaded: ");

    return res.status(200).json(subject);
  } catch (e) {
    console.log("ERRO: ", e);
    return res
      .status(400)
      .json({ message: "Error when retrieving subject from DB", error });
  }
};
