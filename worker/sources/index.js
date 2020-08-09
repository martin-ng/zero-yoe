"use strict";

const fs = require("fs");

const sources = fs
  .readdirSync(__dirname, { withFileTypes: true })
  .filter((item) => item.isDirectory())
  .map(({ name }) => require(`./${name}`)(name));

exports.getLatestData = async () => {};
