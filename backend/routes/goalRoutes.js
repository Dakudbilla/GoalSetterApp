const router = require("express").Router();

/**
 * Desc- All Goals
 * METHOD- @GET
 */
router.get("/", (req, res) => {
  res.json({ message: "Get Goals" });
});

/**
 * Desc- Add Goal
 * METHOD- @POST
 */
router.post("/", (req, res) => {
  res.json({ message: "Create Goal" });
});

/**
 * Desc- Update Goal
 * METHOD- @PUT
 */
router.put("/:id", (req, res) => {
  res.json({ message: `Update Goal ${req.params.id}` });
});

/**
 * Desc- Delete Goal
 * METHOD- @DELETE
 */
router.delete("/:id", (req, res) => {
  res.json({ message: `Delete Goal ${req.params.id}` });
});
module.exports = router;
