const mongoose = require('mongoose');

const { Schema } = mongoose;
const boardSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: 'mongoose-board' },
);

// mongoose라 가능한 문법
module.exports = mongoose.model('Board', boardSchema);
