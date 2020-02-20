import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import https from 'https';
import fs from 'fs';
import reducers from '../reducers/index.js';
import path from 'path';
import util from 'util';

const pReadFile = util.promisify(fs.readFile);

export default async (req) => {

    let clientKey, clientCert;

    try{
        clientKey = await pReadFile(path.resolve('./tls_self_keys/key.key'));
        clientCert = await pReadFile(path.resolve('./tls_self_keys/cert.pem'));
    } catch(e){
        console.log(e);
    }

    let httpsServerOpts = {
        // key:clientKey,
        // cert:clientCert,
        //ca:clientCert.toString(),
        ca:clientCert,
    };
    let httpsAgent = new https.Agent(httpsServerOpts);

    const axiosInstance = axios.create({
        baseURL: APP_CONFIG.apiUrl,
        httpsAgent,
    });
    const store = createStore(reducers, {}, applyMiddleware(thunk.withExtraArgument(axiosInstance)));

    return store;
}