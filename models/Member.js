const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please add a first name"],
        minLength: 2,
        maxLength: 20,
        trim: true
    },
    lastName: {
        type: String,
        required: [true, "Please add a last name"],
        minLength: 2,
        maxLength: 20,
        trim: true
    },
    fullName: { type: String },
});

MemberSchema.set("collection", "members");

MemberSchema.index({ firstName: 1, lastName: 1 }, { unique: true });

MemberSchema.pre("save", async function (next) {
    this.fullName = `${this.firstName} ${this.lastName}`;
  });

module.exports = mongoose.model('Member', MemberSchema);