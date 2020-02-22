const winston = require('winston');
const format = winston.format;
const createLogger = winston.createLogger;
const transports = winston.transports;
const logger = createLogger({
  level: 'error',
  format: format.combine(
    // format.timestamp({
    //   format: 'YYYY-MM-DD HH:mm:ss'
    // }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'saasworthy' },
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    //
    new transports.File({ filename: 'app/log/log.js', level: 'error' }),
  ]
});



module.exports=logger;