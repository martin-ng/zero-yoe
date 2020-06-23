const fetch = require("node-fetch");
const url = require("url");
const redis = require("redis");

let client;
if (process.env.REDISCLOUD_URL) {
  let redisURL = url.parse(process.env.REDISCLOUD_URL);
  client = redis.createClient(redisURL);
} else {
  client = redis.createClient();
}

const { promisify } = require("util");

const setAsync = promisify(client.set).bind(client);

const baseURL = "https://jobs.github.com/positions.json";

function filterJuniorJobs(jobs) {
  const filteredJobs = jobs.filter((job) => {
    const jobTitle = job.title.toLowerCase();

    if (
      jobTitle.includes("senior") ||
      jobTitle.includes("manager") ||
      jobTitle.includes("architect")
    ) {
      return false;
    }
    return true;
  });
  return filteredJobs;
}

async function fetchFromGithub() {
  console.log("fetching jobs");
  let resultCount = 1;
  let currentPage = 0;

  const allJobs = [];

  while (resultCount > 0) {
    const data = await fetch(`${baseURL}?page=${currentPage}`);
    const jobs = await data.json();
    allJobs.push(...jobs);
    resultCount = jobs.length;
    currentPage += 1;
  }
  console.log(`got ${allJobs.length} in total`);

  const juniorJobs = filterJuniorJobs(allJobs);
  console.log(`length of junior ${juniorJobs.length}`);
  const res = await setAsync("github", JSON.stringify(juniorJobs));
  console.log("res", { res });
}

fetchFromGithub();

module.exports = fetchFromGithub;
