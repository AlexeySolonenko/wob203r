//import 'babel-polyfill';
import express from 'express';
import https from 'https';

import { logger } from './shared_util/logging/logger_w.js';
import renderer from './client/universal/renderer.js';
import createStore from './client/universal/createStore.js';
import proxy from 'express-http-proxy';
import reatRouterConfig from 'react-router-config';
const matchRoutes = reatRouterConfig.matchRoutes;
import Routes from './client/routes/Routes.js';
import { createRequire } from 'module';
import dirname from './client/crutches/dirname.cjs';


import config from 'config';
global.APP_CONFIG= config.get('appConfig');

 const app = express();
/* serve static files, like client bundle, some assets, from public folder */
app.use(express.static('public'));

/* TODO to establish communicaton later */
app.use('/api', proxy('http://apitest.tab4lioz.beget.tech'))

//app.get('*', (req, res) => {
app.get(/^[^.]+$|\.(?!(js|css|png|jpeg|ico)$)([^.]+$)/, (req, res) => {
    const store = createStore(req);

    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
        return route.loadData ? route.loadData(store) : null;
    }).map((promise) => {
        if (promise) {
            return new Promise((resolve, reject) => {
                promise.then(resolve).catch(resolve);
            });
        }
    });
    Promise.all(promises).then(() => {
        const context = {};
        const content = renderer(req, store, context);
        //console.log(context);
        if (context.url) {
            return res.redirect(302, context.url);
        }
        if (context.notFound) {
            res.status(404);
        }

        res.send(content);
    });
});
const port = process.env.port || 3000;
console.log('SSR preparing to serve  ');
app.listen(port, () => {
    console.log('Listening on port   : ',port);
});