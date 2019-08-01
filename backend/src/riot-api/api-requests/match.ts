import axios, { AxiosResponse } from 'axios';
import { RURL } from '../utils/urls';

const matchesURL = new RURL()
    .MTCH()
    .V4()
    .MTCHS();

const matchListsURL = new RURL()
    .MTCH()
    .V4()
    .MTCHL()
    .BYA();

const timelinesURL = new RURL()
    .MTCH()
    .V4()
    .TMLURL()
    .BYM();

export const match = {
    byMatchId(matchId: string): Promise<AxiosResponse<any>> {
        return axios.get(matchesURL.add(matchId).toString());
    },
    byTournamentCode(tournamentCode: string): Promise<AxiosResponse<any>> {
        return axios.get(matchesURL.BYTC().add(tournamentCode).toString());
    },
    byMatchIdAndTournamentCode(matchId: string, tournamentCode: string): Promise<AxiosResponse<any>> {
        return axios.get(matchesURL.add(matchId).BYTC().add(tournamentCode).toString());
    },
    matchListsByAccount(accountId: string): Promise<AxiosResponse<any>> {
        return axios.get(matchListsURL.add(accountId).toString());
    },
    timelinesByMatchId(matchId: string): Promise<AxiosResponse<any>> {
        return axios.get(timelinesURL.add(matchId).toString());
    },
};
