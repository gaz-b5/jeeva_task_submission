const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  doc_name: {
    type: String,
    required: true,
  },
  pat_name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  audio: {
    type: String,
    required: true,
  },
});

const RecordModel = mongoose.model("records", UserSchema);
module.exports = RecordModel;
