const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userName: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  twitterName: {
    type: String
  },
  redditName: {
    type: String
  },
  stackOverFlowId: {
    type: String
  }
});

var userModel = mongoose.model("user", UserSchema);
module.exports = userModel;
