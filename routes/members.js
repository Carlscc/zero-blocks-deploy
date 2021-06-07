const router = require("express").Router()
const path = require("path");
const { getMembers, addMember, deleteMember } = require(path.join(
  "..",
  "controllers",
  "members"
));

router.route("/").get(getMembers).post(addMember);

router.route("/:id").delete(deleteMember);

module.exports = router;
