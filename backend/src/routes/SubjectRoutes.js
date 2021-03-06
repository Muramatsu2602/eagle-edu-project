const express = require("express");
const router = express.Router();
const SubjectsController = require("../controllers/SubjectsController.js");

router.post("/getSubjectById", SubjectsController.getSubjectById);
router.post("/getSubjectsByFk", SubjectsController.getSubjectsByFk);
router.post("/createSubject", SubjectsController.createSubject);

module.exports = router;
