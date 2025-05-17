const mongoose = require("mongoose");
require("dotenv").config();  // Load environment variables from .env file

// Use the MONGO_URI environment variable
mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;

db.on("connected", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to the database");
  }
});
