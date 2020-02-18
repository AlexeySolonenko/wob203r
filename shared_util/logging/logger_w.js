import winston from 'winston';
import config from 'config';
/* TODO to check for conditional import - need async or lazy eval? */
if (!global.APP_CONFIG) {
    global.APP_CONFIG = config.get('appConfig');
}
let logger;
if (APP_CONFIG.mode === "development") {
    
    logger = winston.createLogger({
        level: 'info',
        format: winston.format.simple(),
        defaultMeta: { service: 'default', date: new Date() },
        transports: [
            new winston.transports.File({ filename: './tmp/wob203s.log' })
        ]
    });
} else {
    logger = {
        info: function () { },
    }
}

export { logger };