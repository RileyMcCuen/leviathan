import axios, { AxiosResponse } from 'axios';
import { RURL } from '../utils/urls';

const masteriesBySummonerURL = new RURL()
    .CM()
    .V4()
    .CMS()
    .BYS();
const scoresBySummonerURL = new RURL()
    .CM()
    .V4()
    .SCORES();

export const championMastery = {
    bySummoner(summonerId: string): Promise<AxiosResponse<any>> {
        return axios.get(masteriesBySummonerURL.add(summonerId).toString());
    },
    bySummonerAndByChampion(
        summonerId: string,
        championId: string
    ): Promise<AxiosResponse<any>> {
        return axios.get(
            masteriesBySummonerURL
                .add(summonerId)
                .BYC()
                .add(championId)
                .toString()
        );
    },
    scoresBySummoner(summonerId: string) {
        return axios.get(scoresBySummonerURL.add(summonerId).toString());
    }
};
