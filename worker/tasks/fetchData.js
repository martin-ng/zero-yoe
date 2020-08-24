const fetch = require("node-fetch");
const redis = require("redis");
const { getLatest } = require("../sources");

let client;
if (process.env.REDIS_URL) {
  client = redis.createClient(process.env.REDIS_URL);
} else {
  client = redis.createClient();
}

const { promisify } = require("util");

const setAsync = promisify(client.set).bind(client);

async function gotAllData() {
  const items = await getLatest();
  // console.log("yes", items[0][0]);
}

gotAllData();
/*
 * Algorithm to be developed below
 */

function filterJuniorJobs(jobs) {
  // 604800 seconds == 1 week
  // 604800 * 2 is for 2 weeks
  const startTime = new Date().getTime();
  const endTime = startTime - 604800000 * 2;
  const filteredJobs = jobs.filter((job) => {
    const jobTitle = job.title.toLowerCase();
    const jobDescription = job.description;
    const timeCreated = new Date(job.created_at).getTime();

    if (
      jobTitle.includes("senior") ||
      jobTitle.includes("manager") ||
      jobTitle.includes("architect")
    ) {
      return false;
    }

    if (timeCreated < endTime) {
      return false;
    }

    const termsToAvoid = [
      "1+ years",
      "1+ YEARS",
      "2+ years",
      "2+ YEARS",
      "3+ years",
      "3+ YEARS",
    ];

    for (let term of termsToAvoid) {
      if (jobDescription.includes(term)) {
        return false;
      }
    }

    return true;
  });
  return filteredJobs;
}

module.exports = gotAllData;
