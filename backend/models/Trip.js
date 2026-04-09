const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  guests: {
    type: Array,
    default: [],
  },
  userDetails: {
    name: { type: String },
    email: { type: String },
    phone: { type: String },
  },
  status: {
    type: String,
    default: 'booked',
  },
}, {
  timestamps: true, // Automatically manage createdAt and updatedAt
});

const Trip = mongoose.model('Trip', tripSchema);
module.exports = Trip;
