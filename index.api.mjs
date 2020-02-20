import path from 'path';
import fs from 'fs';
import http from 'http';
import https from 'https';
import cors from 'cors';
import filename from './shared_crutches/filename.cjs';
import { logger } from './shared_util/logging/logger_w.js';
import express from 'express';
import { paths } from './api/mocks/paths/paths.js';
import { routes } from './api/mocks/routes/routes.js';
import viewParams from './api/mocks/viewParams/viewParams.js';
import util from 'util';

import config from 'config';
global.APP_CONFIG= config.get('appConfig');

import { loginRouteHanlder } from './api/routeHandlers/login.js';

/* Study Middleware Routers */
import { studyGeneratorRouter } from './api/middleware-study/generators/study-generator.js';
import { usersMiniApp } from './api/middleware-express-routers/users-mini-app/users-mini-app.js';

import passport from 'passport';
import session from 'express-session';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import { getMySqlSessionOpts } from './api/middleware-vendor/session/mysql-session-middleware.js';



/* Asynced functinons */
const pReadFile = util.promisify(fs.readFile);





console.log('index.api.mjs 2');

/* TRIALS */
//import httpsLetsEncryptTool from 'greenlock-express';


(async () => {
    try {
        logger.info('starting on index.mjs');
        const app = express();
        const port = process.env.port || 3001;

        /* Middleware- Vendor */
        app.use(bodyParser.raw());
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(cookieParser());
        const sessionOpts = await getMySqlSessionOpts();
        app.use(session(sessionOpts));
        app.use(passport.initialize());
        app.use(passport.session());

        console.log(22);

        app.use((req, res, next) => {
            console.log('session', req.session);
            console.log('session    id', req.sessionID);
            next();
        });

        /* Middleware Express Routers  */
        app.use('/study/generators/', studyGeneratorRouter);
        app.use('/users/', usersMiniApp);

        
        /* TODO to make a final fall back NOT FOUND route handler  */

        app.get('/', (req, res) => {
            if (req.session.views) {
                req.session.views++;
            } else {
                req.session.views = 1;
            }
            res.send('Hello world from express 3. You viewed this page ' + req.session.views + ' times');
        });

        console.log(233);

        app.post('/login/', loginRouteHanlder);

        let allowedOrigins = [
            'http://localhost:3000',
            'https://localhost:3000',
            'http://localhost:3001',
            'https://localhost:3001',
            'http://127.0.0.1:3000',
            'http://127.0.0.1:3001',
            'http://debug.tab4lioz.beget.tech/',
        ];

        app.use((req, res, next) => {
            let requestPath = req.protocol + '://' + req.hostname;
            console.log(requestPath);
            logger.info(requestPath);
            next();
        });

        console.log(235);


        app.all('/login2', cors({ origin: allowedOrigins, 'credentials': true }), (req, res, next) => {
            console.log('login2', req.body, req.query, req.params);
            console.log(req.hostname, req.originalUrl, req.path);
            console.log('cookie', req.cookies);
            console.log('login 2', req.body, req.query, req.params);
            //res.cookie('test','test');
            res.json({ test: 'test' });
            res.end();
        });


        app.get('/fetch_paths', (req, res) => {
            console.log('fetching paths');
            res.send(JSON.stringify({ payload: { data: paths } }));
            res.end();
        });

        console.log(237);

        app.get('/fetch_routes', (req, res) => {
            console.log('fetching routes');
            /** 
             * @typedef import('../../typedefs/navTypeDefs.js').wob203rRoutes 
             */
            let allowedRoutes = routes;

            res.send(JSON.stringify({ payload: { data: allowedRoutes } }));
            res.end();
        });

        app.get('/fetch_view_params', (req, res) => {
            console.log('fetching view params 1');
            res.send(JSON.stringify({ payload: { data: viewParams } }));
            res.end();
        });

        // const httpsLetsEncryptServer= httpsLetsEncryptTool.init({
        //     packageRoog: __dirname,
        //     configDir: "./greenlock.d",
        //     maintainerEmail: "tab4@live.com",
        //     cluster: false,
        // });
        // httpsLetsEncryptServer.serve(app);
        // let httpsKey = await pReadFile(path.resolve('./tls_self_keys/cert.key'));
        // let httpsCert = await pReadFile(path.resolve('./tls_self_keys/cert.pem'));

        /* TODO to apply local certificates only for local host - on remote host apache is a proxy, node should talk to apache in http ?  */
        let httpsKey, httpsCert;
        try{
            httpsKey = await pReadFile(path.resolve('./tls_self_keys/key.key'));
            httpsCert = await pReadFile(path.resolve('./tls_self_keys/cert.crt'));
        } catch(e){
            console.log(e);
        }
        console.log(3);
        let httpsServerOpts = {
            key:httpsKey,
            cert:httpsCert,
        };
        let httpsServer = https.createServer(httpsServerOpts,app);
        console.log('before listen 3');
        httpsServer.listen(port, 'localhost', 511,
            () => console.log('Express  listening on ' + port));
    } catch (e) {
        logger.info(e.message);
    }
})();
