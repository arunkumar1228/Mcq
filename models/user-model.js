const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, maxlength: 12, minlength: 3 },
  email: { type: String, required: true, unique: true },
  resetToken: String,
  resetTokenExpiredAt: Date,
  phone:{type:String,required:true,maxlength:10},
});

module.exports = mongoose.model("User", userSchema);
