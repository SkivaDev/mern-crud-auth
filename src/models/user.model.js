import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true, // remove whitespace

  },
  email: {
    type: String,
    required: true,
    trim: true, // remove whitespace
    unique: true,

  },
  password: {
    type: String,
    required: true,
  }
})

export default mongoose.model("User", userSchema);