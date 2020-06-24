const CronJob = require("cron").CronJob;

const fetchFromGithub = require("./tasks/fetchDataGithub");

const jobGithub = new CronJob(
  "0 * * * *",
  () => {
    console.log("Cron running!");
    fetchFromGithub();
  },
  null,
  true,
  "America/Los_Angeles"
);
jobGithub.start();

module.exports.jobGithub = jobGithub;
