import asyncReadAndDeployFiles from './util/asyncReadAndDeployFiles.js';
import client_dev_ftp_connect from './confidential/client_dev_ftp_connect.js';

const files = ['./public/bundle.js','./public/index.js'];
asyncReadAndDeployFiles(files,client_dev_ftp_connect);
