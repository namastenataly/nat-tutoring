const { Schema, model } = require("mongoose");

const bookingSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  bookedDay: {
    type: String,
    required: true
  },
  bookedMonth: {
    type: String,
    required: true
  },
  timeSlot: {
    type: String,
    required: true,
  },
});

const Booking = model('Booking', bookingSchema);

module.exports = Booking;
