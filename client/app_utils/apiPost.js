const apiPost = async (url = '', data = {}) => {
    const res = await fetch(url, {
        method: 'POST', 
        mode: 'cors', 
        cache: 'no-cache', 
        credentials: 'include', 
        headers: {
            //'Access-Control-Allow-Origin':'http://localhost:3000/*',
            'Accept':'application/json',
            'Content-Type': 'application/json',
            'Origin':APP_CONFIG.APP_ORIGIN,
        },
        redirect: 'follow', 
        //referrerPolicy: 'origin',
        body: JSON.stringify(data) 
    });
    return res; 
};

export { apiPost };