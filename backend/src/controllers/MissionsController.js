const Mission = require("../models/mission");

/**
 * returns all Missions from the course table
 * @param {*} req
 * @param {*} res
 * @returns
 */
exports.getMissionsByFk = async (req, res) => {
  try {
    const missions = await Mission.findAll({
      where: { subjectId: req.body.subjectId },
    });

    console.log(`All missions of the given subjectId loaded`);
    return res.status(200).json(missions);
  } catch (e) {
    console.log("ERRO: ", e);
    return res.status(400).json({
      message:
        "Error when retrieving all missions of the given subjectId from DB",
      error,
    });
  }
};

/**
 * returns a Mission given its id
 * @param {*} req
 * @param {*} res
 * @returns
 */
exports.getMissionById = async (req, res) => {
  try {
    const mission = await Subject.findByPk(req.body.id);

    console.log("mission loaded");
    return res.status(200).json(mission);
  } catch (e) {
    console.log("ERRO: ", e);
    return res
      .status(400)
      .json({ message: "Error when retrieving mission from DB", error });
  }
};

/**
 * Returns the next uncompleted mission of a given Subject
 * @param {*} req
 * @param {*} res
 */
exports.getFirstAvailableMission = async (req, res) => {
  try {
    const availableMission = await Mission.findOne({
      where: { isCompleted: false },
    });

    console.log("first available mission loaded");
    return res.status(200).json(availableMission);
  } catch (e) {
    console.log("ERRO: ", e);
    return res.status(400).json({
      message: "Error when retrieving first available mission from DB",
      error,
    });
  }
};

/**
 * creates a new Course
 * @param {*} req
 * @param {*} res
 */
exports.createMission = async (req, res) => {
  try {
    const newMission = await Mission.create({
      name: req.body.name,
      description: req.body.description,
      isCompleted: req.body.isCompleted,
      subjectId: req.body.subjectId,
    });

    console.log("Mission successfully created!");

    return res.status(201).json(newMission);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: `Error when creating a new Mission for Subject of ID: ${req.body.subjectId}`,
      error,
    });
  }
};

/**
 * updates the isComplete field of a mission  given  Subjectid
 * @param {*} req id from Mission, new value for isCompleted
 * @param {*} res
 * @returns
 */
exports.updateMissionIsCompleted = async (req, res) => {
  try {
    const mission = await Mission.findByPk(req.body.id);
    mission.isCompleted = req.body.isCompleted;

    const result = await mission.save();

    console.log("mission updated successfully");
    return res
      .status(200)
      .json({ message: "Successfully updated isComplete status!", result });
  } catch (e) {
    console.log("ERRO: ", e);
    return res.status(400).json({
      message: "Error when updating mission isComplete status from DB",
      error,
    });
  }
};
