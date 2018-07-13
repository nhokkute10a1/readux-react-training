import axios from 'axios';
// import Api_Url from './apiUrl';

export default function callApi(url,method='GET',data)
{
    return axios({
        method: method,
        url: url,
        data: data
    });
}