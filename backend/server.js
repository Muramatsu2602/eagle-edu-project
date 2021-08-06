import ck from "ckey";
const PORT = ck.API_PORT;

import cors from "cors";
import express from "express";
const server = express();

// using middleware to convert request body to JSON
server.use(cors());
server.use(express.json());

// =========== ROUTES ==============
import CoursesController from "./src/controllers/CoursesController.js";
// import {SubjectsController} from "./src/controllers/SubjectsController.js";
// import {MissionsController} from "./src/controllers/MissionsController.js";

// Course
// server.get("/getCourses", CoursesController.getCourses);
// server.get("/getCourseById", CoursesController.getCourseById);
// server.post("/createCourse", CoursesController.createCourse);

// Subject

// Mission

// Checking if API is working
server.get("/", (req, res) => {
  res.send("Eagle Edu API is working!");
});

server.listen(PORT, () =>
  console.log(`Server is alive and listening to  http://localhost:${PORT}`)
);
