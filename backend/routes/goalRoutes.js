const router = require("express").Router();

const {
  getGoals,
  updateGoal,
  deleteGoal,
  createGoal,
} = require("../controllers/goalController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getGoals).post(protect, createGoal);

router.route("/:id").patch(protect, updateGoal).delete(protect, deleteGoal);

module.exports = router;
