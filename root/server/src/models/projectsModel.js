const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: { type: String },
  owner: { type: String },
  description: { type: String },
  language: { type: String },
  created_at: { type: String },
});

module.exports = model('proyects', userSchema);
