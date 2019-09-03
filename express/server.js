const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// DB
const config = require("./config/database");

// Routes import
const companyRoutes = require("./routes/CompanyRoutes");

// DB connnection
mongoose
  .connect(config.database)
  .then(() => {
    console.log("Mongo Connected");
  })
  .catch(() => {
    console.log("Mongo Error");
  });
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/company", companyRoutes);

// Run app
const port = process.eventNames.PORT || 8000;
app.listen(port, () => {
  console.log(`Port Open at ${port}`);
});
