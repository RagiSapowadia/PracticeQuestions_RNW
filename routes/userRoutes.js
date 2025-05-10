const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads'),
    filename: (req, file, cb) => cb(null, file.originalname)
});
const upload = multer({ storage }).single("image");


function isAuthenticated(req, res, next) {
    if (req.session && req.session.user) {
        return next();
    }
    res.redirect("/login");
}


router.get("/", isAuthenticated, userController.getHome);
router.post("/add", isAuthenticated, upload, userController.addUser);
router.get("/edit/:id", isAuthenticated, userController.editUser);
router.post("/update/:id", upload, userController.updateUser);
router.get("/delete", isAuthenticated, userController.deleteUser);


// router.get("/", userController.getHome);
// router.post("/add", upload, userController.addUser);
// router.get("/edit/:id", userController.editUser);
// router.post("/update/:id", upload, userController.updateUser);
// router.get("/delete", userController.deleteUser);

module.exports = router;
