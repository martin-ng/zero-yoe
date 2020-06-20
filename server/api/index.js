const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("HELLO WORLD!!");
});

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
