const path = require("path");
const Update = require(path.join("..", "models", "Update"));
const Member = require(path.join("..", "models", "Member"));

// @desc    Get all updates
// @route   GET /updates
// @access  Public
exports.getUpdates = async (req, res, next) => {
  try {
    let query = {};

    if (req.query.q) {
      let { q } = req.query;
      query = {
        $or: [
          { update: { $regex: q, $options: "i" } },
          { message: { $regex: q, $options: "i" } },
        ],
      };
    }

    const updates = await Update.find(query);

    return res.status(200).json({
      success: true,
      data: updates,
    });
  } catch (err) {
    return res.status(500).json({ success: false, error: err });
  }
};

// @desc    Add an update
// @route   POST /updates
// @access  Public
exports.addUpdates = async (req, res, next) => {
  if (req.body.message) {
    const member = await Member.findOne({ fullName: req.body.member });

    if (!member) {
      return res.status(400).json({
        success: false,
        error: "Member not found",
      });
    }

    req.body._member = member._id;

    try {
      const update = await Update.create(req.body);

      return res.status(201).json({
        success: true,
        data: update,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        error: err,
      });
    }
  }
};

// @desc    edit an update
// @route   PUT /updates/:id
// @access  Public
exports.editUpdates = async (req, res, next) => {
  try {
    let update = Update.findById(req.params.id);

    if (!update) {
      return res.status(400).json({
        success: false,
        error: "Update not found",
      });
    }

    const member = await Member.findOne({ fullName: req.body.member });

    if (!member) {
      return res.status(400).json({
        success: false,
        error: "Member not found",
      });
    }

    req.body._member = member._id;

    req.body.date = Date.now();

    console.log(req.body);

    update = await Update.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return res.status(201).json({
      success: true,
      data: update,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err,
    });
  }
};

// @desc    Delete an update
// @route   DELETE updates/:id
// @access  Public
exports.deleteUpdates = async (req, res, next) => {
  try {
    const update = await Update.findById(req.params.id);

    if (!update) {
      return res.status(400).json({
        success: false,
        error: "Member not found",
      });
    }
    await update.remove();

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