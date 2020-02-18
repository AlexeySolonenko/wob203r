import { asyncReadJson } from './shared_util/filesystem/asyncReadJson.mjs';
import filename from './client/crutches/filename.cjs';
import asyncReadAndDeployFiles from './util/asyncReadAndDeployFiles.mjs';
import { createRequire } from 'module';

const require = createRequire(filename);
const WindowsToaster = require('node-notifier').WindowsToaster;
var notifier = new WindowsToaster();

const files = ['./public/bundle.js','./public/index.js'];
(async () => {
    const connectionConf = await asyncReadJson('./secrets/client_dev_ftp_connect.json');
    await asyncReadAndDeployFiles(files,connectionConf);
    /* Currently used hosting provides an indirect method to restart node js */
    /* We need to update 'last modified' tstamp of a given file */
    const restarter  = ['./tmp/restart.txt','./tmp/restart.txt'];
    await asyncReadAndDeployFiles(restarter,connectionConf);
    let msg = 'Remote debuggin server at debug.tab4lioz.beget.tech bundle has been deployed, and the server has been restrated.';

    console.log(msg);
    notifier.notify({
       title: 'Node development server notification',
       message: msg, 
    });
})();
