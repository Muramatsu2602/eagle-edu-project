const express = require("express");
const router = express.Router();
const MissionsController = require("../controllers/MissionsController");

router.get("/getMissionsByFk", MissionsController.getMissionsByFk);
router.get("/getMissionById", MissionsController.getMissionById);
router.get("/getFirstAvailableMission", MissionsController.getFirstAvailableMission);
router.post("/createMission", MissionsController.createMission);
router.post("/updateMissionIsCompleted", MissionsController.updateMissionIsCompleted);

module.exports = router;
