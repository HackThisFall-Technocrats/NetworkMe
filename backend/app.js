const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const app = express();
dotenv.config({ path: "./config.env" });

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(req.headers);
  next();
});

// app.use("/api/v1/tours", TourRouter);
// app.use("/api/v1/users", UserRouter);
// app.use("/api/v1/reviews", ReviewRouter);

app.all("*", (req, res, next) => {
  next(new appError(`Cant find the ${req.originalUrl} on this server`, 404));
});

// app.use(globalErrorhandler);

module.exports = app;
