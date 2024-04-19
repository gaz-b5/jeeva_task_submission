const router = require("express").Router();
const Record = require("../models/Records");

router.post("/", async (req, res) => {
  try {
    const record = await Record(req.body).save();
    res
      .status(201)
      .send({ data: record, message: "Record successfully uploaded" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const records = await Record.find();
    res.status(200).send({ data: records });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
