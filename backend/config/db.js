const mongoose = require("mongoose");
const keys = require("./keys");

const connectDB = async () => {
  try {
    await mongoose.connect(keys.database.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB successfully");
  } catch (err) {
    console.log("Failed to connect to MongoDB:");
    process.exit(1);
  }
};

module.exports = connectDB;
