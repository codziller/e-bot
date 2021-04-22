const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  user_id: String,
});

module.exports = mongoose.model("user", userSchema);
