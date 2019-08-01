import axios, { AxiosResponse } from 'axios';
import { RURL } from '../utils/urls';

const statusURL = new RURL()
    .STUS()
    .V3()
    .SHRD()
    .toString();

export const status = {
    status(): Promise<AxiosResponse<any>> {
        return axios.get(statusURL);
    },
};
