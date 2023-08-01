const router = require("express").Router();

const Posts = require("../models/Posts");

//get all Posts
router.get("/", async (req, res) => {
  try {
    const data = await Posts.find({});
    if (!data) {
      throw new Error("and error occurred during fetch");
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "and error occurred during fetch" });
  }
});

//get Post by ID
router.get("/:id", async (req, res) => {
  try {
    const postId = req.params.id;
    const data = await Posts.findById(postId);
    if (!data) {
      throw new Error("and error occurred during fetch");
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "and error occurred during fetch" });
  }
});

//create a Post
router.post("/", async (req, res) => {
  try {
    const { date, title, subtitle, content, image, video, category } = req.body;

    const data = await Posts.create({
      date,
      title,
      subtitle,
      content,
      image,
      video,
      category,
    });
    if (!data) {
      throw new Error("and error occurred during the creation");
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "and error occurred during the creation" });
  }
});

//update  a Posts
router.put("/:id", async (req, res) => {
  try {
    const postId = req.params.id;
    const { date, title, subtitle, content, image, video, category } = req.body;

    const data = await Posts.findByIdAndUpdate(postId, {
      date,
      title,
      subtitle,
      content,
      image,
      video,
      category,
    });
    if (!data) {
      throw new Error("and error occurred during the updating");
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "and error occurred during the updating" });
  }
});

//delete a Post
router.delete("/:id", async (req, res) => {
  try {
    const postId = req.params.id;

    const data = await Posts.findByIdAndDelete(postId);
    if (!data) {
      throw new Error("and error occurred during the delete");
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "and error occurred during the delete" });
  }
});


module.exports = router;