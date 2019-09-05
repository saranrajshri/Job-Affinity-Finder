const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
  companyName: {
    type: String
  },
  userName: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  jobPosts: [
    {
      title: String,
      description: String,
      experience: String,
      languages: String
    }
  ]
});
const companyModel = mongoose.model("companyModel", CompanySchema);
module.exports = companyModel;
