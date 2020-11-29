const express = require("express"),
  morgan = require("morgan"),
  cors = require("cors"),
  helmet = require("helmet"),
  moment = require("moment");

module.exports = async (app) => {
  app.use(
    cors({
      origin: "http://localhost:8080",
    })
  );

  app.use(express.json());

  app.use(express.urlencoded({ extended: false }));

  morgan.format("date", function () {
    return moment(new Date()).format("DD-MM-YYYY HH:mm:ss");
  });

  app.use(morgan("combined"));

  app.use(require("../configs/responseFormat"));

  app.use(helmet());
};
