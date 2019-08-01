import axios, { AxiosResponse } from 'axios';
import { RURL } from '../utils/urls';

const championURL = new RURL()
    .PLT()
    .V3()
    .CR()
    .toString();

export const champion = {
    rotations(): Promise<AxiosResponse<any>> {
        return axios.get(championURL);
    },
};
