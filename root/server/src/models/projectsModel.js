const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const projectsSchema = new Schema({
  name: { type: String },
  owner: { type: String },
  description: { type: String },
  language: { type: String },
  collaborators: [{ type: Schema.Types.ObjectId, ref: 'collaborators' }],
  created_at: { type: String },
});

module.exports = model('proyects', projectsSchema);
