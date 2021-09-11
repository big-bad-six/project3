const { Schema, model } = require('mongoose');

const memeTextSchema = new Schema({
  text: {
    type: String,
    required: true,
    trim: true,
  },
});

const MemeText = model('MemeText', memeTextSchema);

module.exports = MemeText;