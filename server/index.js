const express = require("express");
const app = express();

const redis = require("redis");
const client = redis.createClient();

const { promisify } = require("util");
const getAsync = promisify(client.get).bind(client);

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.get("/jobs", async (req, res) => {
  const getJobs = await getAsync("github");
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.send(getJobs);
});

app.listen(PORT, () => {
  console.log(`Zero Yoe's server is listening on port ${PORT}`);
});
