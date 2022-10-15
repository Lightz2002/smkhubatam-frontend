import axios from 'axios';

export async function fetchapi(url, method = 'get', headers = {}) {
    const data = await axios(url);
    return data.data;
}