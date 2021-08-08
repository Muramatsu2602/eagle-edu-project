const express = require("express");
const router = express.Router();
const SubjectsController = require("../controllers/SubjectsController.js");

router.get("/getSubjectsByFk", SubjectsController.getSubjectsByFk);
router.get("/getSubjectById", SubjectsController.getSubjectById);
router.post("/createSubject", SubjectsController.createSubject);
router.post("/updateProgressById", SubjectsController.updateProgressById);

module.exports = router;
