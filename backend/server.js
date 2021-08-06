const ck = require("ckey");
const PORT = ck.API_PORT;

const express = require("express");
const app = express();

// using middleware to convert request body to JSON
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Eagle Edu API is working!");
});

app.listen(PORT, () =>
  console.log(`Server is alive and listening to  http://localhost:${PORT}`)
);
