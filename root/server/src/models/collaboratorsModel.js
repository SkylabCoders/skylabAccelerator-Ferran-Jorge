const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const collaboratorsSchema = new Schema({
  name: { type: String },
  login: { type: String },
});

module.exports = model('collaborators', collaboratorsSchema);
