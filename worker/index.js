const CronJob = require("cron").CronJob;

const fetchFromGithub = require("./tasks/fetchDataGithub");

const jobGithub = new CronJob(
  "* * * * * *",
  fetchFromGithub,
  null,
  true,
  "America/Los_Angeles"
);
jobGithub.start();
