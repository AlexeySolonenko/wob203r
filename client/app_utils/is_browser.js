export const isBrowser = () => {
    if(process && process.versions && process.versions.node && process.versions.node !== 'undefined'){
        return false;
    } else {
        return true;
    }
}
