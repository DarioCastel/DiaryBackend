const router = require("express").Router();

const Note = require("../models/Notes");

//get all notes
router.get("/", async (req, res) => {
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
router.get("/:id", async (req, res) => {
  try {
    const noteId = req.params.id;
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
router.post("/", async (req, res) => {
  try {
    const { title, description, date } = req.body;

    const data = await Note.create({ title, description, date });
    if (!data) {
      throw new Error("and error occurred during the creation");
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "and error occurred during the creation" });
  }
});

//update  a Note
router.put("/:id", async (req, res) => {
  try {
    const noteId = req.params.id;
    const { title, description, date } = req.body;

    const data = await Note.findByIdAndUpdate(noteId, {
      title,
      description,
      date,
    });
    if (!data) {
      throw new Error("and error occurred during the updating");
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "and error occurred during the updating" });
  }
});

//delete a Note
router.delete("/:id", async (req, res) => {
  try {
    const noteId = req.params.id;

    const data = await Note.findByIdAndDelete(noteId);
    if (!data) {
      throw new Error("and error occurred during the delete");
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "and error occurred during the delete" });
  }
});


module.exports = router;