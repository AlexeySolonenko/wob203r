import filename from './src/crutches/filename.cjs';
import asyncReadAndDeployFiles from './util/asyncReadAndDeployFiles.mjs';
import client_dev_ftp_connect from './confidential/client_dev_ftp_connect.mjs';
import { createRequire } from 'module';
const require = createRequire(filename);
const WindowsToaster = require('node-notifier').WindowsToaster;
var notifier = new WindowsToaster();

const files = ['./public/bundle.js','./public/index.js'];
(async () => {
    await asyncReadAndDeployFiles(files,client_dev_ftp_connect);
    /* Currently used hosting provides an inderect method to restart node js */
    /* We need to update 'last modified' tstamp of a given file */
    const restarter  = ['./tmp/restart.txt','./tmp/restart.txt'];
    await asyncReadAndDeployFiles(restarter,client_dev_ftp_connect);
    let msg = 'Remote debuggin server at debug.tab4lioz.beget.tech bundle has been deployed, and the server has been restrated.';

    console.log(msg);
    notifier.notify({
       title: 'Node development server notification',
       message: msg, 
    });
})();
