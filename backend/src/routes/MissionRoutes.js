const express = require("express");
const router = express.Router();
const MissionsController = require("../controllers/MissionsController");

router.post("/getMissionsByFk", MissionsController.getMissionsByFk);
router.post("/getMissionById", MissionsController.getMissionById);
router.post("/getFirstAvailableMission", MissionsController.getFirstAvailableMission);
router.post("/createMission", MissionsController.createMission);
router.post("/updateMissionIsCompleted", MissionsController.updateMissionIsCompleted);

module.exports = router;
