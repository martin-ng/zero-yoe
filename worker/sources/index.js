"use strict";

const fs = require("fs");

const sources = fs
  .readdirSync(__dirname, { withFileTypes: true })
  .filter((item) => item.isDirectory())
  .map(({ name }) => require(`./${name}`)(name));

exports.getLatest = async () => {
  const responseList = await Promise.all(sources.map((s) => s.fetch()));
  return Object.assign({}, ...responseList);
};
