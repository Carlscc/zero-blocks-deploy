const mongoose = require('mongoose');
const path = require("path");
const conn = require(path.join("..", "server"));
const AutoIncrement = require("mongoose-sequence")(mongoose);

const UpdateSchema = new mongoose.Schema({
    message: {
        type: String,
        required: [true, "Please enter an update"],
        trim: true
    },
    attention: {
        type: Boolean,
        required: true
    },
    member: {
        type: String,
        required: true },
    _member: {
        type: mongoose.Schema.ObjectId,
        ref: "Member"
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

UpdateSchema.plugin(AutoIncrement, { inc_field: "id" });

module.exports = mongoose.model("update", UpdateSchema);