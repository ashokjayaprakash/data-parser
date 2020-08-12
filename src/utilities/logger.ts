const winston = require("winston");
const fs = require("fs");

const tsFormat = () => new Date().toLocaleTimeString();
const logDir = "log";

export const logger = new winston.Logger({
  transports: [
    new winston.transports.Console({
      colorize: true,
      timestamp: tsFormat,
      level: "DEBUG",
    }),
  ],
});
