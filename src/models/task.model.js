import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true, // remove whitespace
  },
  description: {
    type: String,
    required: true,
    trim: true, // remove whitespace
  },
  date: {
    type: Date,
    default: Date.now,
  },
  user: {
    ref: "User",
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },

}, {
  timestamps: true
})

export default mongoose.model("Task", taskSchema);
