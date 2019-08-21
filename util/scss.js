import sass from 'node-sass';
import fs from 'fs';
import path from 'path';
import dirname from '../src/crutches/dirname.cjs';
import asyncReadAndDeployFiles from './asyncReadAndDeployFiles.js';
import  client_dev_ftp_connect from '../confidential/client_dev_ftp_connect.js';

/* handle paths  */
const boostrapPath = path.resolve(dirname, '../../public/bootstrap_bundle.min.css');
const bootstrapSourcePath = path.resolve(dirname,'../common_scss/bootstrap_custom.scss');

/* prepare parts */
const config = {
    file:bootstrapSourcePath,
    outputStyle: 'expanded',
    outFile: boostrapPath,
};

const deploy = asyncReadAndDeployFiles.bind(null,['./public/bootstrap_bundle.min.css'],client_dev_ftp_connect);
const cb = async function (error, result) {
    if (!error) {
        fs.writeFile(boostrapPath, result.css, async function (err) {
            if (err) console.log(err);
            else {
                await deploy();
                console.log('scss deployment completed, see log above or below for extra details');
            }
        });
    } else{
        console.log(error);
    }
}

sass.render(config,cb);
