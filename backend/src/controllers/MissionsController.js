const Mission = require("../models/mission");

/**
 * returns all Missions from the course table
 * @param {*} req
 * @param {*} res
 * @returns
 */
exports.getMissionsByFk = async (req, res) => {
  try {
    const missions = await Subject.findAll({
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
