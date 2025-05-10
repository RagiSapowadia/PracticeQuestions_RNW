const express = require("express");
const path = require("path");
const session = require("express-session");
const app = express();

const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");

require("./config/db");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(session({secret: 'keyboard cat'}));
app.use((req, res, next) => {
    res.locals.user = req.session.user;
    next();
});



app.use("/", authRoutes); // Signup/Login/Logout
app.use("/", userRoutes); // Blog routes

app.listen(7777, () => {
    console.log("Server running at http://localhost:8800");
});
