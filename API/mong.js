const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const _ = require("lodash");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "assets")));
app.use(cors());
dotenv.config();

const { quizSchema, fastRefSchema } = require("./models/quizModel");
const port = process.env.PORT;

const MONGOURL = process.env.MONGO_URL;

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

app.get("/", async (req, res) => {
  const FastRef = mongoose.model("fastRef", fastRefSchema, "fastRef");
  const layout = await FastRef.find();
  res.status(200).send(layout);


});

app.get(`/programming/:id`, async (req, res) => {
  console.log(req.params);

  let id = req.params.id;
  const quiz = mongoose.model("quiz", quizSchema, "programming");
  const data = await quiz.find({ name: id });

  res.status(200).send(data);
});

app.get(`/science/:id`, async (req, res) => {
  let id = req.params.id;
  const quiz = mongoose.model("quiz", quizSchema, "science");
  const data = await quiz.find({ name: id });

  res.status(200).send(data);
});

app.get(`/languages/:id`, async (req, res) => {
     let id = req.params.id;
     const quiz = mongoose.model("quiz", quizSchema, "languages");
     const data = await quiz.find({ name: id });
     res.status(200).send(data);


});