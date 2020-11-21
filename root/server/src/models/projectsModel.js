const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: { String },
});

module.exports = model('Projects', userSchema);
