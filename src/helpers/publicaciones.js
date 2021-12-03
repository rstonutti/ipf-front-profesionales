import { fetchConToken, fetchSinToken } from "./fetch";


export const getPublicaciones = async (endpoint) => {
    const resp = await fetchSinToken(endpoint);
    const body = await resp.json();

    return body;

};

export const postPublicaciones = async (values) => {
    const resp = await fetchConToken('api/profesionales', values, 'POST');
    const body = await resp.json();

    return body;

};

export const deletePublicaciones = async (endpoint) => {
    console.log(endpoint)
    const resp = await fetchConToken(endpoint, '', 'DELETE');
    const body = await resp.json();

    return body;

};