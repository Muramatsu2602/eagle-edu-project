const ck = require("ckey");
const PORT = ck.API_PORT;
const cors = require( "cors");
const express = require("express");
const server = express();

// using middleware to convert request body to JSON
server.use(cors());
server.use(express.json());

// =========== ROUTES ==============
const CoursesController  = require ("./src/controllers/CoursesController");
const SubjectsController = require("./src/controllers/SubjectsController.js");
// import {MissionsController} from "./src/controllers/MissionsController.js";

// Course
server.get("/getCourses", CoursesController.getCourses);
server.get("/getCourseById", CoursesController.getCourseById);
server.post("/createCourse", CoursesController.createCourse);

// Subject
server.get("/getSubjectsByFk", SubjectsController.getSubjectsByFk);
server.get("/getSubjectById", SubjectsController.getSubjectById);
server.post("/createSubject", SubjectsController.createSubject);
server.post("/updateProgressById", SubjectsController.updateProgressById);

// Mission

// Checking if API is working
server.get("/", (req, res) => {
  res.send("Eagle Edu API is working!");
});

server.listen(PORT, () =>
  console.log(`Server is alive and listening to  http://localhost:${PORT}`)
);
