const { mongoURL } = require("../../secrets");
const mongoose = require("mongoose");

const db = async () => {
  await mongoose.connect(mongoURL, { useNewUrlParser: true });
  console.log("database connected !!");
};

module.exports = db;
