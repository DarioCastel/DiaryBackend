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

//get all notes
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


//get notes by ID
app.get("/api/notes/:id", async (req, res) => {
  try {

    const noteId = req.params.id
    const data = await Note.findById(noteId);
    if (!data) {
      throw new Error("and error occurred during fetch");
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "and error occurred during fetch" });
  }
});


//create a Note
app.post("/api/notes/", async (req, res) => {
  try {

    const {title, description, date} = req.body;

    const data = await Note.create({title, description, date});
    if (!data) {
      throw new Error("and error occurred during the creation");
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "and error occurred during the creation" });
  }
});


//update  a Note
app.put("/api/notes/:id", async (req, res) => {
  try {
    const noteId = req.params.id
    const {title, description, date} = req.body;

    const data = await Note.findByIdAndUpdate(noteId, {title, description, date});
    if (!data) {
      throw new Error("and error occurred during the updating");
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "and error occurred during the updating" });
  }
});


//delete a Note
app.delete("/api/notes/:id", async (req, res) => {
  try {
    const noteId = req.params.id

    const data = await Note.findByIdAndDelete(noteId);
    if (!data) {
      throw new Error("and error occurred during the delete");
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "and error occurred during the delete" });
  }
});



app.get("*", (req, res) => {
  res.sendStatus("404");
});

app.listen(PORT, () => {
  console.log(`Server is runnig on port: ${PORT}`);
});
