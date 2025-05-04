const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://ragisapovadia:ragisapowadia17@cluster0.jrjdxni.mongodb.net/moviedb?retryWrites=true&w=majority&appName=Cluster0");

const db = mongoose.connection;

db.on("connected", () => {
  console.log("MongoDB connected");
});

db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});
