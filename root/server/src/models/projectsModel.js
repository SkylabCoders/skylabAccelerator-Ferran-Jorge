const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: { type: String },
});

module.exports = model('Projects', userSchema);
