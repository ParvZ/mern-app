const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let userSchema = new Schema({
  username: {
    type: String
}
});

const model = mongoose.model("user", userSchema);

module.exports = model;