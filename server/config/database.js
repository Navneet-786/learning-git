const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URI, {
        dbName: "git-learning",
      })
      .then(() => {
        console.log("db is connecting ");
      });
  } catch (error) {
    console.log("Some error occured while connecting to database:", err);
  }
};
module.exports = { connectToDB };
