const router = require("express").Router();
const path = require("path");
const { getUpdates, addUpdates, editUpdates, deleteUpdates } = require(path.join(
  "..",
  "controllers",
  "updates"
));

router.route("/").get(getUpdates).post(addUpdates);

router.route("/:id").put(editUpdates).delete(deleteUpdates);

module.exports = router;