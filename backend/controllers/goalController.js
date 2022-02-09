const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const Goal = require("../models/goalModel");

/**
 * @desc Get All Goals
 * @route GET /api/goals
 * @access Private
 */
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
});

/**
 * @desc Create Goal
 * @route POST /api/goals
 * @access Private
 */
const createGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Plead add a text field");
  }

  const goal = await Goal.create({
    text: req.body.text,
  });
  res.status(201).json(goal);
});

/**
 * @desc Update Goal
 * @route UPDATE /api/goals/:id
 * @access Private
 */
const updateGoal = asyncHandler(async (req, res) => {
  if (!mongoose.isValidObjectId(req.params["id"])) {
    res.status(400);
    throw new Error("Goal Does Not Exist");
  }

  const goal = await Goal.findById(req.params["id"]);
  if (!goal) {
    res.status(400);
    throw new Error("Goal Does Not Exist");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params["id"], req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});

/**
 * @desc Delete Goal
 * @route DELETE /api/goal/:id
 * @access Private
 */
const deleteGoal = asyncHandler(async (req, res) => {
  if (!mongoose.isValidObjectId(req.params["id"])) {
    res.status(400);
    throw new Error("Goal Does Not Exist");
  }

  const goal = await Goal.findById(req.params["id"]);
  if (!goal) {
    res.status(400);
    throw new Error("Goal Does Not Exist");
  }
  await goal.remove();
  res.status(200).json({ message: "Delete Succesful" });
});

module.exports = {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
};
