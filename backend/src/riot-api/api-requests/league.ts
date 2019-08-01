import axios, { AxiosResponse } from 'axios';
import { RURL } from '../utils/urls';

const leagueEntriesURL = new RURL()
    .LEG()
    .V4()
    .ENT();
const leagueURL = new RURL()
    .LEG()
    .V4()
    .LEGS();
const leaguesURL = new RURL()
    .LEG()
    .V4();

export const league = {
    entriesBySummoner(summonerId: string): Promise<AxiosResponse<any>> {
        return axios.get(leagueEntriesURL.BYS().add(summonerId).toString());
    },
    entriesByQueue(queue: string,  tier: string, division: string): Promise<AxiosResponse<any>> {
        return axios.get(leagueEntriesURL.add(queue).add(tier).add(division).toString());
    },
    leagues(leagueId: string): Promise<AxiosResponse<any>> {
        return axios.get(leagueURL.add(leagueId).toString());
    },
    challengerLeagues(queue: string): Promise<AxiosResponse<any>> {
        return axios.get(leaguesURL.CLEGS().BYQ().add(queue).toString());
    },
    masterLeagues(queue: string): Promise<AxiosResponse<any>> {
        return axios.get(leaguesURL.MLEGS().BYQ().add(queue).toString());
    },
    grandmasterLeagues(queue: string): Promise<AxiosResponse<any>> {
        return axios.get(leaguesURL.GLEGS().BYQ().add(queue).toString());
    },
};
