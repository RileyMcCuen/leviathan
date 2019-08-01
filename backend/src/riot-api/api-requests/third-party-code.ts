import axios, { AxiosResponse } from 'axios';
import { RURL } from '../utils/urls';

const thirdPartyCodeURL = new RURL()
    .PLT()
    .V4()
    .TPC()
    .BYS();

export const thirdPartyCode = {
    bySummoner(summonerId: string): Promise<AxiosResponse<any>> {
        return axios.get(thirdPartyCodeURL.add(summonerId).toString());
    },
};
