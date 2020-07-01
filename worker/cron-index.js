const CronJob = require("cron").CronJob;

const fetchFromGithub = require("./tasks/fetchData");

const jobGithub = new CronJob(
  "* * * * *",
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
