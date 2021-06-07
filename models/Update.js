const mongoose = require('mongoose');
const path = require("path");
const conn = require(path.join("..", "server"));
const AutoIncrement = require("mongoose-sequence")(mongoose);

const UpdateSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    message: {
        type: String,
        required: [true, "Please enter an update"]
    },
    attention: {
        type: Boolean,
        required: true
    },
    _member: {
        type: mongoose.Schema.ObjectId,
        ref: "member"
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

UpdateSchema.plugin(AutoIncrement, { inc_field: "id" });

module.exports = mongoose.model("update", UpdateSchema);