const {
  getGoals,
  updateGoal,
  deleteGoal,
  createGoal,
} = require("../controllers/goalController");

const router = require("express").Router();

router.route("/").get(getGoals).post(createGoal);

router.route("/:id").put(updateGoal).delete(deleteGoal);

module.exports = router;
