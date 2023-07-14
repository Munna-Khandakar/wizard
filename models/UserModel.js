const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    user_name: {
      type: String,
    },
    user_email: {
      type: String,
    },
    user_phone: {
      type: String,
    },
    user_password: {
      type: String,
    },
    user_birth: {
      type: String,
    },
    user_gender: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", UserSchema);
