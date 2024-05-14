const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;

const connect = async () => {
  const connectionState = mongoose.connection.readyState;

  if (connectionState === 1) {
    console.log("Already Connected");
    return;
  }

  if (connectionState === 2) {
    console.log("Connecting");
    return;
  }

  try {
    // Await added to ensure the connection completes before proceeding.
    await mongoose.connect(MONGODB_URI, {
      dbName: "ProfileData",
      bufferCommands: false // Ensure this option needs to be false; else, remove it.
    });
    console.log("Connected");
  } catch (error) {
    console.log("Error connecting to database", error);
    throw new Error("Error connecting to database");
  }
};

module.exports = connect;
