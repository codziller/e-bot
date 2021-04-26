const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  feedback:String
});

module.exports = mongoose.model("user", userSchema);
