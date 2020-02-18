import { asyncReadJson } from '../shared_util/filesystem/asyncReadJson.mjs';
import filename from '../client/crutches/filename.cjs';
import path from 'path';
import { createRequire } from 'module';
const require = createRequire(filename);
const Client = require('ftp');
//const filename = require('../src/crutches/filename.js');
import fs from 'fs';

/* todo to rework with promisify OR async  */
const asyncReadFiles = (filenames) => {
    if (!Array.isArray(filenames)) filenames = [filenames];
    const promises = filenames.map((filePath) =>
        new Promise((resolve, reject) => {
            fs.readFile(filePath, (err, data) => {
                if (err) reject(err);
                //const remotePath = 'public_html/' + path.parse(filePath).base.toString();
                const remotePath = 'public_html/' + filePath;
                setImmediate(() => {
                    resolve({ data, remotePath });
                });
            });
        }));
    return promises;
};
/* todo to rework with promisify OR async */
const openConnection = (connectConfig) => new Promise( async (resolve, reject) => {
    if(!connectConfig) {
        connectConfig = await asyncReadJson('../secrets/client_def_ftp_connect.json');
    }
    var c = new Client();
    c.on('ready', resolve.bind(null, c),reject);
    c.connect(connectConfig);
});

const deployFiles = async (data, ftpConnection) => {

    const asyncPut = ({ data, remotePath }) =>
        new Promise((resolve, reject) => {
            ftpConnection.put(data, remotePath, (err) => {
                setImmediate(() => {
                    resolve();
                });
                if (err) { 
                    reject(err);
                }
            });
        });
    await Promise.all(data.map(asyncPut));
};

const asyncReadAndDeployFiles = async (files,connectConfig) => {
    try {
        const res = await Promise.all([...asyncReadFiles(files), openConnection(connectConfig)]);
        
        await deployFiles(res.slice(0,res.length -1),res[res.length-1]);
        res[res.length-1].end();
        console.log('deploy completed');
    } catch (e) {
        console.log(e);
    }
};

//const files = ['./public/test1.txt','./test2.txt'];
//asyncReadAndDeployFiles(files);

export default asyncReadAndDeployFiles;

