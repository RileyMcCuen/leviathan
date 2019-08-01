import axios, { AxiosResponse } from 'axios';
import { RURL } from '../utils/urls';

const spectatorURL = new RURL()
    .SPEC()
    .V4();

export const spectator = {
    activeGames(summonerId: string): Promise<AxiosResponse<any>> {
        return axios.get(spectatorURL.ACTG().BYS().add(summonerId).toString());
    },
    featuredGames(): Promise<AxiosResponse<any>> {
        return axios.get(spectatorURL.FETG().toString());
    },
};
