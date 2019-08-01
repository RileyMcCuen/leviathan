import axios, { AxiosResponse } from 'axios';
import { RURL } from '../utils/urls';

const summonerURL = new RURL()
    .SUM()
    .V4()
    .SUMS();

export const summoner = {
    byAccount(accountId: string): Promise<AxiosResponse<any>> {
        return axios.get(summonerURL.BYA().add(accountId).toString());
    },
    byName(name: string): Promise<AxiosResponse<any>> {
        return axios.get(summonerURL.BYN().add(name).toString());
    },
    byPuuid(puuId: string): Promise<AxiosResponse<any>> {
        return axios.get(summonerURL.BYP().add(puuId).toString());
    },
    bySummonerId(summonerId: string): Promise<AxiosResponse<any>> {
        return axios.get(summonerURL.add(summonerId).toString());
    },
};
