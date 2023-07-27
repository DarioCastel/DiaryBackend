require("dotenv").config();

const cors = require("cors");
const express = require("express");
const connectDB = require("./connectDB");
const Note = require("./models/Notes");

const app = express();
const PORT = process.env.PORT || 8000;

connectDB();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json("Mi 1era api");
});

app.get("/api/notes", async (req, res) => {
  try {
    const data = await Note.find({});
    if (!data) {
      throw new Error("and error occurred during fetch");
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "and error occurred during fetch" });
  }
});

app.get("*", (req, res) => {
  res.sendStatus("404");
});

app.listen(PORT, () => {
  console.log(`Server is runnig on port: ${PORT}`);
});
