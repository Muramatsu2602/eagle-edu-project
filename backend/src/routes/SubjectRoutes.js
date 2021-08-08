const express = require("express");
const router = express.Router();
const SubjectsController = require("../controllers/SubjectsController.js");

router.get("/getSubjectById", SubjectsController.getSubjectById);
router.post("/getSubjectsByFk", SubjectsController.getSubjectsByFk);
router.post("/createSubject", SubjectsController.createSubject);
router.post("/updateProgressById", SubjectsController.updateProgressById);

module.exports = router;
