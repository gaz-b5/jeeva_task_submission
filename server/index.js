const express = require("express");
const app = express();
const mongoose = require("mongoose");
const RecordModel = require("./models/Records");
const audioRoutes = require("./routes/audio");
require("dotenv").config();

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.CONNECTION_STRING);

// app.get("/getRecords", (req, res) => {
//   RecordModel.find({})
//     .then((result) => {
//       res.json(result);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// app.post("/createRecord", async (req, res) => {
//   const record = req.body;
//   const newRecord = new RecordModel(record);
//   await newRecord.save();

//   res.json(record);
// });

// Routes
app.use("/api/records", audioRoutes);

app.listen(3001, () => {
  console.log("Server running successfully!");
});
