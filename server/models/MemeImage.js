const { Schema, model } = require('mongoose');

const memeImageSchema = new Schema({
  desc: {
    type: String,
    required: true,
    trim: true,
  },
  url: {
    type: String,
    required: true,
    trim: true,
  },
});

const MemeImage = model('MemeImage', memeImageSchema);

module.exports = MemeImage;