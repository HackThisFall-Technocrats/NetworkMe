const express = require('express');
const morgan = require('morgan');
const app = express();
const rateLimit = require('express-rate-limit');
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean')
const hpp= require('hpp')
const appError = require('./utils/appError');
const globalErrorhandler = require('./controllers/errorController');
const TourRouter = require('./routes/toursRoute');
const UserRouter = require('./routes/UsersRoute');
const ReviewRouter = require('./routes/reviewRoutes');

//Creating a middleware

app.use(helmet());


if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

const limiter = rateLimit({
  max: 100,
  windows: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour',
})
app.use('/api', limiter)

app.use(express.json({ limit: '10kb' }));

app.use(mongoSanitize());
app.use(xss());
app.use(hpp({
  whitelist: [
    'duration', 
    'ratingsQuantity',
    'ratingAverage',
    'maxGroupSize',
    'diffculty',
    'price'
  ]
}));
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(req.headers)
  next();
});

app.use('/api/v1/tours', TourRouter);
app.use('/api/v1/users', UserRouter);
app.use('/api/v1/reviews', ReviewRouter);

app.all('*', (req, res, next) => {
  next(new appError(`Cant find the ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorhandler);

module.exports = app;
