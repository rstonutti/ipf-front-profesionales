const baseUrl = 'https://ipf-profesionales.herokuapp.com';

const fetchSinToken = (endpoint, data, method = 'GET') => {
    const url = `${baseUrl}/${endpoint}`;
    
    if(method === 'GET'){
        return fetch(url);
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    };
    
};

const fetchConToken = (endpoint, data, method = 'GET') => {
    const url = `${baseUrl}/${endpoint}`;

    const token = localStorage.getItem('token') || '';
    
    if(method === 'GET' || method === 'DELETE'){
        return fetch(url, {
            method,
            headers: {
                'auth-token': token,
            }
        });
    } else {
        return fetch(url, {
            method,
            headers: {
                'auth-token': token,
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    };
};

export {
    fetchSinToken,
    fetchConToken
}