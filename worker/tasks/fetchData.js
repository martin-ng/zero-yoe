const fetch = require("node-fetch");
const redis = require("redis");

let client;
if (process.env.REDIS_URL) {
  client = redis.createClient(process.env.REDIS_URL);
} else {
  client = redis.createClient();
}

const { promisify } = require("util");

const setAsync = promisify(client.set).bind(client);

const baseURL = "https://jobs.github.com/positions.json";
let locationURL = "united+states";

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
    return true;
  });
  return filteredJobs;
}

/*
 * Function below is for the US specifically
 */

async function fetchFromGithub() {
  console.log(`fetching jobs from ${baseURL}?location=${locationURL}`);

  const allJobs = [];

  const data = await fetch(`${baseURL}?location=${locationURL}`);

  const jobs = await data.json();

  allJobs.push(...jobs);

  console.log(`got ${allJobs.length} in total`);

  const juniorJobs = filterJuniorJobs(allJobs);
  console.log(`length of junior ${juniorJobs.length}`);
  const res = await setAsync("github", JSON.stringify(juniorJobs));
  console.log("res github", { res });
}

async function fetchFromLinkedin() {}

/*
 * Function below is for a paginated function
 */

// async function fetchFromGithub() {
//   let resultCount = 1;
//   let currentPage = 0;
//   console.log(`fetching jobs from ${baseURL}?page=${currentPage}`);

//   const allJobs = [];
//   console.log("result", resultCount);
//   while (resultCount > 0) {
//     const data = await fetch(`${baseURL}?page=${currentPage}`);

//     const jobs = await data.json();

//     allJobs.push(...jobs);

//     resultCount = jobs.length;
//     currentPage += 1;
//   }
//   console.log(`got ${allJobs.length} in total`);

//   const juniorJobs = filterJuniorJobs(allJobs);
//   console.log(`length of junior ${juniorJobs.length}`);
//   const res = await setAsync("github", JSON.stringify(juniorJobs));
//   console.log("res", { res });
// }

fetchFromGithub();

module.exports = fetchFromGithub;
