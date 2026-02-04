const express = require("express");
const Student = require("../models/Student");

const router = express.Router();

// CREATE student
router.post("/add", async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.send("Student added");
});

// READ students
router.get("/", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// UPDATE student
router.put("/update/:id", async (req, res) => {
  await Student.findByIdAndUpdate(req.params.id, req.body);
  res.send("Student updated");
});

// DELETE student
router.delete("/delete/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.send("Student deleted");
});

module.exports = router;
