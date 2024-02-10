/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      trim: true,
    },
    venue: {
      type: String,
    },
    message: {
      type: String,
      trim: true,
    },
    images: String,
    startDateTime: {
      type: Date,
    },
    endDateTime: {
      type: Date,
    },
    organizers: [
      {
        name: {
          type: String,
          required: true,
          trim: true,
          maxlength: 255,
        },
        socialMediaLink: {
          type: String,
          required: true,
        },
        photo: {
          type: String,
          // required: true,
        },
      },
    ],
    sponsors: [
      {
        name: {
          type: String,
          // required: true,
          trim: true,
          maxlength: 255,
        },
        logo: {
          type: String,
          // required: true,
        },
        url: {
          type: String,
          // required: true,
        },
      },
    ],
    volunteers: [
      {
        name: {
          type: String,
          // required: true,
          maxlength: 255,
        },
        designation: {
          type: String,
        },
        socialMediaUrl: {
          type: String,
        },
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

eventSchema.virtual('durationWeeks').get(function () {
  return (this.endDateTime - this.startDateTime) / (7 * 24 * 60 * 60 * 1000);
});

// ... Rest of your code

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;
