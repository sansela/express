const express = require("express");
const registerUser = require("./UserController");

const router = express.Router();

router.route("/register").post(registerUser).get((req, res) => {
    res.send("this is the response from get method");
});

router.route("/register").delete(registerUser);

module.exports = router;