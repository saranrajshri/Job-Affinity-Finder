const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

// Company Schema
const User = require("../models/UserDetails");

// Hasing Password
function hash(input, salt) {
  var hashedString = crypto.pbkdf2Sync(input, salt, 10000, 512, "sha512");
  return ["pbkdf2S", "10000", salt, hashedString.toString("hex")].join("$");
}

// Registration Route
router.post("/register", function(req, res) {
  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length >= 1) {
        return res.status(401).json({
          message: "Email Already Exists"
        });
      } else {
        var salt = crypto.randomBytes(128).toString("hex");
        var hashedPassword = hash(req.body.password, salt);
        var data = {
          userName: req.body.userName,
          email: req.body.email,
          password: hashedPassword,
          twitterName: req.body.twitterName,
          redditName: req.body.redditName,
          stackOverFlowId: req.body.stackOverFlowId
        };
        var user = new User(data);
        user.save().then(function(response) {
          res.send(response);
        });
      }
    });
});

// Login Route
router.post("/login", function(req, res) {
  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length >= 1) {
        var actualPassword = user[0].password;
        var salt = actualPassword.split("$")[2];
        var hashedPassword = hash(req.body.password, salt);
        if (actualPassword == hashedPassword) {
          var userData = {
            email: req.body.email,
            password: req.body.password
          };
          // Jwt Signin
          jwt.sign({ userData }, "secretkey", (err, token) => {
            res.json({
              token
            });
          });
        } else {
          res.status(401).json({
            message: "Invalid Credentials"
          });
        }
      }
    });
});

// dummy route
router.post("/getUserDetails", verifyToken, function(req, res) {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        authData
      });
    }
  });
});

//get all details
router.post("/getAllDetails", function(req, res) {
  Company.find({ email: req.body.email })
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      console.log(err);
    });
});

// verify jwt token
function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];

    req.token = bearerToken;

    next();
  } else {
    res.sendStatus(403);
  }
}
module.exports = router;
