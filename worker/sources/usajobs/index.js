const axios = require("axios");
const Source = require("../Sources");
const secrets = require("../secrets.js");
require("dotenv").config();

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
    const {
      data,
    } = await axios.get(
      `https://data.usajobs.gov/api/search?JobCategoryCode=${jobCode}`,
      { headers }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

getLatest();
module.exports = (name) => new Source({ name, getLatest });
