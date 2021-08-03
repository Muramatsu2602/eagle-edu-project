const ck = require("ckey");
const PORT = ck.API_PORT;

const express = require("express");
const app = express();

// using middleware to convert request body to JSON
app.use(express.json());

//
app.listen(PORT, () =>
  console.log(`backend is alive and well on http://localhost:${PORT}`)
);
