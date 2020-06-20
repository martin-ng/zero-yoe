const express = require("express");
const app = express();

const redis = require("redis");
const client = redis.createClient();

const { promisify } = require("util");
const getAsync = promisify(client.get).bind(client);

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("HELLO WORLD!!");
});

app.get("/jobs", async (req, res) => {
  const getJobs = await getAsync("github");
  res.send(getJobs);
});

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
