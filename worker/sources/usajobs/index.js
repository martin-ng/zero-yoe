const axios = require("axios");
const Source = require("../Sources");
require("dotenv").config();

console.log(process.env);

const host = process.env.USAJOBS_HOST;
const userAgent = process.env.USAJOBS_USER_AGENT;
const authKey = process.env.USAJOBS_AUTH_KEY;
const jobCode = process.env.USAJOBS_JOB_CODE;

async function getLatest() {
  const headers = {
    Host: host,
    "User-Agent": userAgent,
    "Authorization-Key": authKey,
  };
  try {
    const res = await axios(
      `https://data.usajobs.gov/api/search?JobCategoryCode=${jobCode}`,
      { headers }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

module.exports = (name) => new Source({ name, getLatest });
