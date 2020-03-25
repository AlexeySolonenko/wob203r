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

    let httpsServerOpts;

    try {
        httpsServerOpts = {
            key : await pReadFile(path.resolve('../wob203r_secrets/certs/end_cert_key.pem')),
            cert : await pReadFile(path.resolve('../wob203r_secrets/certs/end_cert_cert.pem')),
            ca : await pReadFile(path.resolve('../wob203r_secrets/certs/cacert.crt')),
            passphrase: 'Limpopo2*',
            defaultPort:3002,
        }
    } catch (e) {
        console.log(e,'1');
    }

    let httpsAgent = new https.Agent(httpsServerOpts);

    let baseURL = req.protocol + ":" + APP_CONFIG.apiHost + ":";
    if (APP_CONFIG.env === 'test_local') {
        baseURL += ((req.protocol === 'https') ? APP_CONFIG.apiHttpsPort : APP_CONFIG.apiHttpPort);
    }
    const axiosInstance = axios.create({
        baseURL,
        httpsAgent,
    });
    const store = createStore(reducers, {}, applyMiddleware(thunk.withExtraArgument(axiosInstance)));

    return store;
}