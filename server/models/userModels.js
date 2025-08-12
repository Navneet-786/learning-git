const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: [true, "userName is required"],
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: Number,
  },
  gender: {
    type: String,
    default: "male",
    enum: ["male", "female"],
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

module.exports = mongoose.model("User", userSchema);
