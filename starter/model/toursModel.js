const mongoose = require('mongoose');
const slugify = require('slugify');
// const User = require('../model/userModel');
const validator = require('validator');

const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A tour must have name specified'],
      unique: true,
      trim: true,
  
      // validate: [validator.isAlpha, 'A tour name must contain only alphabets']
    },
  
    duration: {
      type: Number,
      required: [true, 'A tour must have duration specified'],
    },
    Venue: {
      type: String,
      required: [true, 'A event must have venue specified'],
    },

    difficulty: {
      type: String,
      required: [true, 'A tour must have difficulty specified'],
      enum: {
        values: ['easy', 'difficult', 'medium'],
        message: 'The difficulty must be either easy, difficult or medium',
      },
    },

    time: {
      type: Number,
      required: [true, 'A tour must have price specified'],
    },
    ratingAverage: {
      type: Number,
      default: 4.5,
      minlength: [1, 'the rating must be above 1.0'],
      maxlength: [5, 'The rating must be below 5.0'],
    },
  
 
  
    description: {
      type: String,
      trim: true,
    },
 
    images: [String],
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
    startDates: [Date],
    secretTour: {
      type: Boolean,
      default: false,
    },

    startLocation: {
      //Geo Location
      type: {
        type: String,
        default: 'Point',
        enum: ['Point'],
      },
      coordinates: [Number],
      address: 'String',
      description: 'String',
    },
    locations: [
      {
        //Geo Location
        type: {
          type: String,
          default: 'Point',
          enum: ['Point'],
        },
        coordinates: [Number],
        address: 'String',
        description: 'String',
        day: Number,
      },
    ],
    organizers: [
      {
        names: {
          type: String,
          required: true,
          trim: true,
          maxlength: 255,
        },
        socials: [
          {
            platform: {
              type: String,
              enum: ['twitter', 'facebook', 'instagram', 'linkedin', 'other'],
              required: true,
            },
            link: {
              type: String,
              required: true,
            },
          },
        ],
      },
    ],
    volunteers: [
      {
        namess: {
          type: String,
          required: true,
          trim: true,
          maxlength: 255,
        },
        socials: [
          {
            platform: {
              type: String,
              enum: ['twitter', 'facebook', 'instagram', 'linkedin', 'other'],
              required: true,
            },
            link: {
              type: String,
              required: true,
            },
          },
        ],
      },
    ],
  },

  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

tourSchema.virtual('durationWeeks').get(function () {
  return this.duration / 7;
});

tourSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lowercase: true });
  next();
});

// tourSchema.pre('save',async function (next) {
//   const guidesPromises = this.guides.map(async (id) => await User.findById(id));
//   this.guides = await Promise.all(guidesPromises)
//   next();
// });

// tourSchema.post('save', function (doc, next) {
//   console.log(doc);
// })

//Query Middelware
tourSchema.pre(/^find/, function (next) {
  this.find({ secretTour: { $ne: true } });
  this.start = Date.now();
  next();
});

tourSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'guides',
    select: '-__v -passwordChangedAt',
  });
});

tourSchema.post(/^find/, function (docs, next) {
  console.log(`Query took${Date.now() - this.start}milissecondss`);
  console.log(docs);
  next();
});

//Aggerate Middelware
tourSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { secretTour: { $ne: true } } });
  console.log(this.pipeline);
  next();
});

const Tour = mongoose.model('Tour', tourSchema);
module.exports = Tour;
