const asyncHandler = require("express-async-handler");

/**
 * @desc Get All Goals
 * @route GET /api/goals
 * @access Private
 */
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Goals" });
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
  res.status(201).json({ message: "Create Goal" });
});

/**
 * @desc Update Goal
 * @route UPDATE /api/goals/:id
 * @access Private
 */
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "update Goals" });
});

/**
 * @desc Delete Goal
 * @route DELETE /api/goal/:id
 * @access Private
 */
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Delete Goals" });
});

module.exports = {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
};
