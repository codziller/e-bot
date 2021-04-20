const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();

const config = require("./config/keys");
const mongoose = require("mongoose");
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

require("./models/User");
require("./models/Demand");
require("./models/CourseCoupons");

app.use(bodyParser.json());

require("./routes/dialogFlowRoutes")(app);
require("./routes/fulfillmentRoutes")(app);
require("./routes/userRoutes")(app);

const cors = require("cors");

//if (process.env.NODE_ENV === "production") {
//js and css files
app.use(express.static("client/build"));
const path = require("path");
app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")));
app.use(cors());

// index.html for all page routes
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});
//}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
