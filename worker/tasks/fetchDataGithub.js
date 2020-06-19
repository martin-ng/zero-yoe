const fetch = require("node-fetch");

const baseURL = "https://jobs.github.com/positions.json";

async function fetchFromGithub() {
  let resultCount = 1;
  let currentPage = 0;

  const allJobs = [];

  while (resultCount > 0) {
    const data = await fetch(`${baseURL}?page=${currentPage}`);
    const jobs = await data.json();
    allJobs.push(...jobs);
    console.log(allJobs.length);
    resultCount = jobs.length;
    currentPage += 1;
  }
  console.log(`got ${allJobs.length} in total`);
}

fetchFromGithub();

module.exports = fetchFromGithub;
