const ck = require("ckey");
const PORT = ck.API_PORT;
const cors = require("cors");
const express = require("express");
const server = express();

// using middleware to convert request body to JSON
server.use(cors());
server.use(express.json());

// Routes
const courseRoutes = require("./src/routes/CourseRoutes");
const subjectRoutes = require("./src/routes/SubjectRoutes");
const missionRoutes = require("./src/routes/MissionRoutes");

server.use("/", courseRoutes);
server.use("/", subjectRoutes);
server.use("/", missionRoutes);

// Checking if API is working
server.get("/", (req, res) => {
  res.send("Eagle Edu API is working!");
});

server.listen(PORT, () =>
  console.log(`Server is alive and listening to  http://localhost:${PORT}`)
);
