const axios = require("axios");
const Source = require("../Sources");

const baseURL = "https://jobs.github.com/positions.json";
const locationURL = "united+states";

async function getLatest() {
  const res = await axios.get(`${baseURL}?location=${locationURL}`);

  return res.data;
}

module.exports = (name) => new Source({ name, getLatest });
