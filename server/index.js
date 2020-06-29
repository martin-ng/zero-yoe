const path = require("path");
const express = require("express");
const app = express();
const redis = require("redis");
const fetch = require("node-fetch");
const secrets = require("../secrets");
require("../worker/cron-index.js");

let client;
if (process.env.REDIS_URL) {
  client = redis.createClient(process.env.REDIS_URL);
} else {
  client = redis.createClient();
}

const { promisify } = require("util");
const getAsync = promisify(client.get).bind(client);

const PORT = process.env.PORT || 8000;

const bootApp = () => {
  app.use(express.static(path.join(__dirname, "../build")));

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });

  app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || "Internal server error.");
  });
};

const startListening = () => {
  app.listen(PORT, () => {
    console.log(`Zero YOE's server is listening on port ${PORT}`);
  });
};

app.get("/api/jobs", async (req, res) => {
  console.log("hi");
  const getJobs = await getAsync("github");
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.send(getJobs);
});

app.post("/api/oauth/linkedin", async (req, res) => {
  const { LINKEDIN_CLIENT, LINKEDIN_SECRET } = secrets;
  // const accessToken = { LINKEDIN_CLIENT, LINKEDIN_SECRET };
  // const testRequest = `https://www.linkedin.com/oauth/v2/grant_type=client_credentials&client_id=${LINKEDIN_CLIENT}&client_secret=${LINKEDIN_SECRET}`;
  const testRequest = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${LINKEDIN_CLIENT}&redirect_uri=https://zeroyoe.herokuapp.com/`;
  const data = await fetch(testRequest);
  const dataJson = data.json();
});

bootApp();
startListening();
