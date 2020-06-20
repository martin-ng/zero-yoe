const fetch = require("node-fetch");
const redis = require("redis");
const client = redis.createClient();

const { promisify } = require("util");

const setAsync = promisify(client.set).bind(client);

const baseURL = "https://jobs.github.com/positions.json";

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
  const res = await setAsync("github", JSON.stringify(allJobs));
  console.log("res", res);
}

fetchFromGithub();

module.exports = fetchFromGithub;
