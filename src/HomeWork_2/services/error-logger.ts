import winston from 'winston';

export const ErrorLogger = winston.createLogger({
  level: 'error',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console({ level: 'error' }),
    new winston.transports.File({ filename: 'error.log' })
  ]
});

export const errorHandler = (err: Error) => {
  ErrorLogger.log('error', err.message, {
    name: err.name,
    stack: err.stack
  });
};
