import { asyncReadJson } from '../shared_util/filesystem/asyncReadJson.mjs';
import sass from 'node-sass';
import fs from 'fs';
import path from 'path';
import dirname from '../client/crutches/dirname.cjs';
import asyncReadAndDeployFiles from './asyncReadAndDeployFiles.mjs';
import autoprefixer from 'autoprefixer';
import postcss from 'postcss';

/* handle paths  */
const boostrapPath = path.resolve(dirname, '../../public/bootstrap_bundle.min.css');
const boostrapTmpPath = path.resolve(dirname, '../../tmp/bootstrap_bundle.min.css');
const bootstrapSourcePath = path.resolve(dirname, '../common_scss/bootstrap_custom.scss');

/* prepare parts */
const config = {
    file: bootstrapSourcePath,
    outputStyle: 'expanded',
    outFile: boostrapTmpPath,
    //outFile: boostrapTmpPath,
};

// const deploy = asyncReadAndDeployFiles.bind(null,['./public/bootstrap_bundle.min.css'],client_dev_ftp_connect);
// const cb = async function (error, result) {
//     if (!error) {
//         fs.writeFile(boostrapPath, result.css, async function (err) {
//             if (err) console.log(err);
//             else {
//                 await deploy();
//                 console.log('scss deployment completed, see log above or below for extra details');
//             }
//         });
//     } else{
//         console.log(error);
//     }
// }

const deploy = async() => {
    const clientAppFtpConfig = await asyncReadJson('../secrets/client_def_ftp_connect.json');
    asyncReadAndDeployFiles.bind(null, ['./public/bootstrap_bundle.min.css'], clientAppFtpConfig);
}
const cb = async function (error, result) {
    if (!error) {
        console.log('start post process');
        const postProcessed = await postcss([autoprefixer()]).process(result.css, { from: boostrapTmpPath, to: boostrapPath });
       
        fs.writeFile(boostrapPath, postProcessed.css, async function (err) {
            if (err) console.log(err);
            else {
                console.log('start deploye');
                await deploy();
                console.log('scss deployment completed, see log above or below for extra details');
            }
        });
    } else {
        console.log(error);
    }
}
console.log('start render');
sass.render(config, cb);
