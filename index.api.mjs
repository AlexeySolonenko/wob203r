import path from 'path';
import fs from 'fs';
import https from 'https';
import { logger } from './shared_util/logging/logger_w.js';
import util from 'util';
import config from 'config';
global.APP_CONFIG = config.get('appConfig');

import { createHttpsApp } from './api/app/createHttpsApp.js';

/* Asynced functinons */
const pReadFile = util.promisify(fs.readFile);

/* TRIALS */
//import httpsLetsEncryptTool from 'greenlock-express';

(async () => {
    /* Create and launch HTTPs server */
    try {
        const httpsApp = await createHttpsApp();
        const port = process.env.port || APP_CONFIG.apiHttpsPort;
        let ca, key, cert, passphrase;
        try {
            key = await pReadFile(path.resolve('../wob203r_secrets/certs/end_cert_key.pem'));
            cert = await pReadFile(path.resolve('../wob203r_secrets/certs/end_cert_cert.pem'));
            
            passphrase = 'Limpopo2*';
        } catch (e) {
            console.log('Error starting API http server' + util.inspect(e));
            logger.info('Error starting API http server' + util.inspect(e));
        }
   
        const httpsServerOpts = { 
            key, passphrase, cert
            // ciphers: [
            //     "ECDHE-RSA-AES128-SHA256",
            //     "DHE-RSA-AES128-SHA256",
            //     "AES128-GCM-SHA256",
            //     "RC4",
            //     "HIGH",
            //     "!MD5",
            //     "!aNULL"
            // ].join(':'),
        };    
        const httpsServer = https.createServer(httpsServerOpts, httpsApp);
        //httpsServer.listen(port, 'localhost', 511,() => console.log('Express  listening on ' + port));
        httpsServer.listen(port);
        httpsServer.on('listening', () => {
            console.log('Https app listening on port  ' + port);
            logger.info('Https app listening on port ' + port);
        });
    } catch (e) {
        console.log('Error starting API https server' + util.inspect(e));
        logger.info('Error starting API https server' + util.inspect(e));
    }

    /* Create and launch HTTP server */
    try {
        const httpApp = await createHttpsApp();
        const port = process.env.port || APP_CONFIG.apiHttpPort;
        httpApp.listen(port);
    } catch(e){
        console.log('Error starting API http server: ' + util.inspect(e));
        logger.info('Error starting API http server' + util.inspect(e));
    }
})();
