const axios = require("axios");
const Source = require("../Sources");

const baseURL = "https://jobs.github.com/positions.json";
const locationURL = "united+states";

async function getLatest() {
  const res = await axios.get(`${baseURL}?location=${locationURL}`);
  console.log("git", res.data);
  return res.data;
}

getLatest();

module.exports = (name) => new Source({ name, getLatest });
