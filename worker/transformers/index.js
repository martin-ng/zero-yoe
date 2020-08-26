"use strict";

const enabledTransforms = [
  "global/github",
  "global/usajobs",
  "global/linkedin",
].map((transformName) => require(`./${transformName}`));

exports.run = (sourceData) => {
  let output = {};
  for (const t of enabledTransforms) {
    output = t.apply(sourceData, output);
  }
};
