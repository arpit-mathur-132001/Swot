const express = require("express");
const router = express.Router();

const Notes = require("../models/Notes");

// @route   POST /api/note/
// @desc    Create short URL
router.post("/:id", async (req, res) => {
  const question = req.body.ques;
  const answer = req.body.ans;
  const user = req.user.id;
  const title = req.params["id"];
  try {
    const note = new Notes({
      question,
      answer,
      user,
      title,
      date: new Date(),
    });

    await note.save();

    res.redirect(`/dashboard/${title}`);
  } catch (err) {
    console.log(err);
    res.status(500).json("Server error");
  }
});

module.exports = router;
