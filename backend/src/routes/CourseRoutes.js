const express = require("express");
const router = express.Router();
const CoursesController = require("../controllers/CoursesController");

router.get("/getCourses", CoursesController.getCourses);
router.get("/getCourseById", CoursesController.getCourseById);
router.post("/createCourse", CoursesController.createCourse);

module.exports = router;
