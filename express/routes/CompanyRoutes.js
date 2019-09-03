const express = require("express");
const router = express.Router();

// Hasing Password
function hash(input, salt) {
  var hashedString = crypto.pbkdf2Sync(input, salt, 10000, 512, "sha512");
  return ["pbkdf2S", "10000", salt, hashedString.toString("hex")].join("$");
}
router.post("/register", function(req, res) {
  var salt = crypto.randomBytes(128).toString("hex");
  var hashedPassword = hash(req.body.password, salt);
  var data = {
    companyName: req.body.companyName,
    userName: req.body.userName,
    email: req.body.email,
    password: hashedPassword
  };
});
module.exports = router;
