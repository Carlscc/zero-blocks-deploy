const path = require("path");
const Member = require(path.join("..", "models", "Member"));

// @desc    Get all members
// @route   GET /members
// @access  Public
exports.getMembers = async (req, res, next) => {
  try {
    const members = await Member.find();

    return res.status(200).json({
      success: true,
      data: members,
    });
  } catch (err) {
    return res.status(500).json({ success: false, error: err });
  }
};

// @desc    Add a member
// @route   POST /members
// @access  Public
exports.addMember = async (req, res, next) => {
  if (req.body.firstName && req.body.lastName) {
    const newMember = new Member(req.body);

    try {
      const member = await newMember.save();

      return res.status(201).json({
        success: true,
        data: member,
      });
    } catch (err) {
      if (err.errmsg.includes("E11000")) {
        return res.status(400).json({
          success: false,
          errMsg: "Duplicate name",
        });
      } else {
        return res.status(500).json({
          success: false,
          error: err,
        });
      }
    }
  }
};

// @desc    Delete a member
// @route   DELETE api/members/:id
// @access  Public
exports.deleteMember = async (req, res, next) => {
  try {
    const member = await Member.findById(req.params.id);

    if (!member) {
      return res.status(400).json({
        success: false,
        error: "Member not found",
      });
    }
    await member.remove();

    res.status(201).json({
      success: true,
      data: {},
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err,
    });
  }
};