import fs from 'fs';
import path from 'path';
import util from 'util';

const pReadFile = util.promisify(fs.readFile);
const asyncReadJson = async (pathToSingleFile) => {
    const buff = await pReadFile(path.resolve(pathToSingleFile));
    const string = buff.toString();
    return JSON.parse(string);
};

export { asyncReadJson };