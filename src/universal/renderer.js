import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../routes/Routes.js';
import { renderRoutes, matchRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';

export default (req, store, context) => {

    console.log('initial context', context);
    const content = renderToString(
        <Provider store={store} >
            <StaticRouter location={req.path}    >
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>
    );
    const matchedRoute = matchRoutes(Routes, req.path);
    //console.log('matchedRoute', matchedRoute);
    const helmet = Helmet.renderStatic();
    //console.log('context after renderer',context);
    return (/* html */
        `
            <html>
                <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta charset="utf-8">
                <link href='bootstrap_bundle.min.css' rel='stylesheet'>
                <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
                <link href="/fonts/iconmonstr-iconic-font.min.css" rel="stylesheet">
	<link href="/fonts/open-iconic-bootstrap.css" rel="stylesheet">
    
    
                <title>БЕЗ ГРАНИЦ - АНГЛИЙСКИЙ ЯЗЫК — МАЛЬТА — WITHOUT BORDERS</title>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                </head>
                <body>
                    <div id='root'>${content}</div>
                    <script>
                       // window.INITIAL_STORE = ${serialize(store.getState())};
                        window.INITIAL_STORE = ${JSON.stringify(store.getState())};
                    </script>
                    <script type="text/javascript" src="bundle.js"></script>
                </body>
            </html>
        `
    );
}
