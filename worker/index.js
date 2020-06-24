const CronJob = require("cron").CronJob;

const fetchFromGithub = require("./tasks/fetchDataGithub");

const jobGithub = new CronJob(
  "0 * * * *",
  fetchFromGithub,
  null,
  true,
  "America/Los_Angeles"
);
jobGithub.start();
