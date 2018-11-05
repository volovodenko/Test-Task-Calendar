import axios from 'axios';


import {API_ROOT} from 'src/config';


export const httpRequest = (url: string, method = 'GET', data: object = null) => {
    const headers = {
        // 'Accept': 'application/json',
        // 'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${localStorage.getItem('JWT')}`
    };

    return axios(
        {
            method,
            url: `${API_ROOT}/${url}`,
            data,
            headers
        }
    );
};

export const checkResponse = (response: IResponse) => {
    if (response.status === 200) {
        return true;
    }

    throw new Error(response.statusText);
};


interface IResponse {
    status: number;
    statusText: string;
}
