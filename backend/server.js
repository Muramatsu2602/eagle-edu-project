const express = require(express)();
const app = express();
const PORT = 8080;

// using middleware to convert request body to JSON
app.use(express.json());

//
app.listen(PORT, () =>
  console.log(`backend is alive and well on http://localhost:${PORT}`)
);
