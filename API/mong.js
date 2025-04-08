const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const _ = require("lodash");
const cors = require("cors");
const path = require("path");
const app = express();

// Middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "assets")));
app.use(cors());
dotenv.config();

// Import models
const { quizSchema, fastRefSchema, YourModel } = require("./models/quizModel");

// Configuration
const port = process.env.PORT || 3000;
const MONGOURL = process.env.MONGO_URL;

// Model caching
const modelCache = new Map();

const getModel = (name, schema, collection) => {
  const key = `${name}-${collection}`;
  if (!modelCache.has(key)) {
    modelCache.set(key, mongoose.model(name, schema, collection));
  }
  return modelCache.get(key);
};

// Error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error:
      process.env.NODE_ENV === "development"
        ? err.message
        : "Internal server error",
  });
};

// MongoDB connection
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
    process.exit(1);
  });

// Routes
app.get("/", async (req, res, next) => {
  try {
    const FastRef = getModel("fastRef", fastRefSchema, "fastRef");
    const layout = await FastRef.find();
    res.status(200).json({
      success: true,
      data: layout,
    });
  } catch (err) {
    next(err);
  }
});

app.get("/api/:quiz/:id", async (req, res, next) => {
  try {
    const { id, quiz: quizPath } = req.params;
    const quiz = getModel("quiz", quizSchema, quizPath);
    const data = await quiz.find({ name: id });

    if (!data || data.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Quiz not found",
      });
    }

    res.status(200).json({
      success: true,
      data,
    });
  } catch (err) {
    next(err);
  }
});


app.post("/rame", async (req, res, next) => {
  try {
    const data = req.body;

    if (!data || Object.keys(data).length === 0) {
      return res.status(400).json({
        success: false,
        message: "Request body cannot be empty",
      });
    }

    const newDoc = new YourModel(data);
    const savedDoc = await newDoc.save();

    res.status(201).json({
      success: true,
      data: savedDoc,
    });
  } catch (err) {
    next(err);
  }
});

// Error handling middleware
app.use(errorHandler);

// Handle 404 routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});
