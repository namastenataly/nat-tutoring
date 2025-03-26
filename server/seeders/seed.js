const db = require("../config/connection");
const { Tutor } = require("../models");

const tutorSeeds = require("./tutorSeeds.json");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  await cleanDB("Tutor", "tutors");

  await Tutor.create(tutorSeeds);

  console.log("Completed! :D");
  process.exit(0);
});
