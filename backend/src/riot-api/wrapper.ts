import { RiotAPICat } from '../logging/config';
import { champion } from './api-requests/champion';
import { championMastery } from './api-requests/champion-mastery';
import { league } from './api-requests/league';
import { match } from './api-requests/match';
import { spectator } from './api-requests/spectator';
import { status } from './api-requests/status';
import { summoner } from './api-requests/summoner';
import { thirdPartyCode } from './api-requests/third-party-code';

export const riotAPI = {
    champion,
    championMastery,
    league,
    match,
    spectator,
    status,
    summoner,
    thirdPartyCode,
    test() {
        summoner.byName('beardedrubi').then(
            (data) => {
                RiotAPICat.info(() => `${JSON.stringify(data.data)}`);
            },
            (data) => {
                RiotAPICat.info(() => `${JSON.stringify(data.data)}`);
            }
        );
    }
};
