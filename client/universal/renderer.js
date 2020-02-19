import React from 'react';
import HttpStatus from 'http-status-codes';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Switch, Route } from 'react-router-dom';
import Routes from '../routes/Routes.js';
import { renderRoutes, matchRoutes } from 'react-router-config';
import ServiceUnavailable from '../pages/503ServiceUn/ServiceUnavaialble.js';
import { Provider } from 'react-redux';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';
import path from 'path';


export default (req, store, context) => {
    /* resolve path to root manually */
    /* todo to check if can utilize some node func, path.relative, or ? */
    let html = '';
    try {
        let level = req.path;
        if (level.charAt(0) == '/') level = level.slice(1);
        if (level.charAt(level.lenth - 1) == '/') level = level.slice(0, level.lenth - 2);
        level = level.split('/').length;
        let toRoot = (new Array(level)).fill('../', 0, level).join('');

        const content = renderToString(
            <Provider store={store} >
                <StaticRouter location={req.path}    >
                    <Switch>
                        <Route path='/we_will_be_back_soon' ><ServiceUnavailable.component /></Route>
                        <Route >{renderRoutes(Routes)}</Route>
                    </Switch>
                </StaticRouter>
            </Provider>
        );
        const matchedRoute = matchRoutes(Routes, req.path);
        const helmet = Helmet.renderStatic();
        const bundlePath = toRoot + "bundle.js";
        if (req.path === '/we_will_be_back_soon') {
            context.status = HttpStatus.SERVICE_UNAVAILABLE;
            //toRoot = '/dont_load_bundle_we_are_in_full_ssr_mode/';
        }
        html = `
        <html>
            <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta charset="utf-8">
            <link href="${toRoot + 'bootstrap_bundle.min.css'}" rel='stylesheet'>
            <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
            <link href="${toRoot + "/fonts/iconmonstr-iconic-font.min.css"}" rel="stylesheet">
<link href="${toRoot + "./fonts/open-iconic-bootstrap.css"}" rel="stylesheet">
            <link href="https://fonts.googleapis.com/css?family=Bad+Script|Caveat|Kelly+Slab|Marck+Script|Press+Start+2P|Ruslan+Display|Stalinist+One|Vollkorn+SC&display=swap" rel="stylesheet">


            <title>БЕЗ ГРАНИЦ - АНГЛИЙСКИЙ ЯЗЫК — МАЛЬТА — WITHOUT BORDERS</title>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            </head>
            <body class="d-flex flex-column h-100">
                <div id='root'>${content}</div>
                <script>
                    window.INITIAL_STORE = ${JSON.stringify(store.getState())};
                    window.APP_CONFIG = ${JSON.stringify(global.APP_CONFIG)};
                </script>
                <script type="text/javascript" src="${toRoot + "bundle.js"}"></script>
            </body>
        </html>
    `;
    } catch (e) {
        context.url = '/we_will_be_back_soon';
        context.status = HttpStatus.TEMPORARY_REDIRECT;
        return '';
    }

    return (html);
}
// window.INITIAL_STORE = ${serialize(store.getState())};