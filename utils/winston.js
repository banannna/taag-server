const winston = require("winston");
const { WINSTON_LOGGING_LEVEL, NODE_ENV, PRODUCTION_ENV } = rootRequire(
  "config"
);

const logger = winston.createLogger({
  level: WINSTON_LOGGING_LEVEL,
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.simple()
  ),
  transports: []
});

if (NODE_ENV !== PRODUCTION_ENV) {
  logger.add(new winston.transports.Console());
}

module.exports = { logger };
