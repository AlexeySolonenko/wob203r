//import 'babel-polyfill';
import fs from 'fs';
import express from 'express';
import https from 'https';
import HttpStatus from 'http-status-codes';
import { logger } from './shared_util/logging/logger_w.js';
import renderer from './client/universal/renderer.js';
import createStore from './client/universal/createStore.js';
import proxy from 'express-http-proxy';
import reatRouterConfig from 'react-router-config';
const matchRoutes = reatRouterConfig.matchRoutes;
import Routes from './client/routes/Routes.js';
import { createRequire } from 'module';
import dirname from './client/crutches/dirname.cjs';
import path from 'path';
import util from 'util';

import config from 'config';
global.APP_CONFIG = config.get('appConfig');

/* Asynced functinons */
const pReadFile = util.promisify(fs.readFile);


const generateSsrApp = async () => {
    const app = express();
    /* serve static files, like client bundle, some assets, from public folder */
    app.use(express.static('public'));

    /* TODO to establish communicaton later */
    app.use('/api', proxy('http://apitest.tab4lioz.beget.tech'))

    //app.get('*', (req, res) => {
    app.get(/^[^.]+$|\.(?!(js|css|png|jpeg|ico)$)([^.]+$)/, async (req, res) => {
        const store = await createStore(req);
        console.log('req');
        console.log(req.secure);
        console.log(req.protocol);

        const promises = matchRoutes(Routes, req.path).map(({ route }) => {
            return route.loadData ? route.loadData(store) : null;
        }).map((promise) => {
            console.log(promise);
            if (promise) {
                return new Promise((resolve, reject) => {
                    promise.then(resolve).catch(resolve);
                });
            }
        });
        
        console.log(store.getState());
        Promise.all(promises).then(() => {
            const context = {};
            /* Redirects */
            /* If api is down */
            /* TODO to setup a handshake with API and check on the handshake */
            console.log('store');
            console.log(store.getState());
            if (!store.getState().paths && req.path !== '/we_will_be_back_soon') {
                return res.redirect(HttpStatus.TEMPORARY_REDIRECT, '/we_will_be_back_soon');
            }

            const content = renderer(req, store, context);

            if (context.url) {
                let status = (context.status) ? context.status : 302;
                return res.redirect(status, context.url);
            }
            if (context.status) {
                res.status(context.status);
            }
            if (context.notFound) {
                res.status(404);
            }

            res.send(content);
        }).catch(e =>{
            console.log('Error launching http app' + util.inspect(e))
            logger.info('Error launching http app' + util.inspect(e));
        });
    });

    return app;
};

(async () => {
    /* Make and run an Http server */
    try {
        const httpApp = await generateSsrApp();
        const port = process.env.port || 3000;
        httpApp.listen(port, () => {
            console.log('HTTP app listening on port : ', port);
        });
    } catch (e) {
        console.log('Error launching http app' + util.inspect(e))
        logger.info('Error launching http app' + util.inspect(e));
    }


    /* Make and run an Https server */

    console.log(process.env);
    let ca, httpsKey, httpsCert;
    try {
        const httpsApp = await generateSsrApp();
        httpsKey = await pReadFile(path.resolve('../wob203r_secrets/certs/end_cert_key.pem'));
        httpsCert = await pReadFile(path.resolve('../wob203r_secrets/certs/end_cert_cert.pem'));
        //ca = await pReadFile(path.resolve('./secrets/cacert.crt'));
        const port = 3002;
        let httpsServerOpts = {
            //ca: ca,
            key: httpsKey,
            passphrase: 'Limpopo2*',
            cert: httpsCert,
        };
        let httpsServer = https.createServer(httpsServerOpts, httpsApp);

        httpsServer.listen(port);
        httpsServer.on('listening', () => {
            console.log('Https app listening on port  ' + port);
            logger.info('Https app listening on port ' + port);
        });

    } catch (e) {
        console.log('Error starting SSR server' + util.inspect(e));
        logger.info('Error starting SSR server' + util.inspect(e));
    }

})();