import { baseURL, key } from './config';

// tslint:disable: max-classes-per-file
// tslint:disable: no-empty

class RiotURL {
    url: string;
    name: string;
    constructor(url: RiotURL | null = null, name?: string) {
        this.name = name ? name : this.name;
        if (url !== null) {
            this.url = url.url;
        } else {
            this.url = '';
        }
        this.add();
    }

    add(seg: string = '') {
        if (seg !== '') {
            this.url += '/' + seg;
        } else {
            this.url += this.name;
        }
        return this;
    }

    toString(): string {
        return baseURL + this.add(`?api_key=${key}`).url;
    }
}

export class RURL extends RiotURL {

    name = '/lol';
    constructor() {
        super(null, '/lol');
    }
    CM = () => CMURL.chain(this);
    PLT = () => PLTURL.chain(this);
    LEG = () => LEGURL.chain(this);
    STUS = () => STUSURL.chain(this);
    MTCH = () => MTCHURL.chain(this);
    SPEC = () => SPECURL.chain(this);
    SUM = () => SUMURL.chain(this);
}

class CMURL extends RiotURL {
    static chain(rurl: RiotURL) {
        return new CMURL(rurl, '/champion-mastery');
    }

    name = '/champion-mastery';

    V4 = () => V4URL.chain(this);
}

class CMSURL extends RiotURL {
    static chain(rurl: RiotURL) {
        return new CMSURL(rurl, '/champion-masteries');
    }
    name = '/champion-masteries';

    BYS = () => BYSURL.chain(this);
    BYC = () => BYCURL.chain(this);
}

class V4URL extends RiotURL {
    static chain(rurl: RiotURL) {
        return new V4URL(rurl, '/v4');
    }
    name = '/v4';

    CMS = () => CMSURL.chain(this);
    SCORES = () => SCOREURL.chain(this);
    ENT = () => ENTURL.chain(this);
    LEGS = ()  => LEGSURL.chain(this);
    CLEGS = ()  => CLEGSURL.chain(this);
    MLEGS = ()  => MLEGSURL.chain(this);
    GLEGS = ()  => GLEGSURL.chain(this);
    MTCHS = () => MTCHSURL.chain(this);
    FETG = () => FETGURL.chain(this);
    ACTG = () => ACTGURL.chain(this);
    SUMS = () => SUMSURL.chain(this);
    TPC = () => TPCURL.chain(this);
    MTCHL = () => MTCHLURL.chain(this);
    TMLURL = () => TMLURL.chain(this);
}

class V3URL extends RiotURL {
    static chain(rurl: RiotURL) {
        return new V3URL(rurl, '/v3');
    }
    name = '/v3';
    CR = () => CRURL.chain(this);
    SHRD = () => SHRDULR.chain(this);
}

class BYSURL extends RiotURL {
    static chain(rulr: RiotURL) {
        return new BYSURL(rulr, '/by-summoner');
    }
    name = '/by-summoner';

    BYC = () => BYCURL.chain(this);
}

class BYCURL extends RiotURL {
    static chain(rurl: RiotURL) {
        return new BYCURL(rurl, '/by-champion');
    }
    name = '/by-champion';
}

class BYQURL extends RiotURL {
    static chain(rurl: RiotURL) {
        return new BYQURL(rurl, '/by-queue');
    }
    name = '/by-queue';
}

class BYAURL extends RiotURL {
    static chain(rurl: RiotURL) {
        return new BYAURL(rurl, '/by-account');
    }
    name = '/by-account';
}

class BYMURL extends RiotURL {
    static chain(rurl: RiotURL) {
        return new BYMURL(rurl, '/by-match');
    }
    name = '/by-match';
}

class BYTCURL extends RiotURL {
    static chain(rurl: RiotURL) {
        return new BYTCURL(rurl, '/by-tournament-code');
    }
    name = '/by-tournament-code';
}

class BYNURL extends RiotURL {
    static chain(rurl: RiotURL) {
        return new BYNURL(rurl, '/by-name');
    }
    name = '/by-name';
}

class BYPURL extends RiotURL {
    static chain(rurl: RiotURL) {
        return new BYPURL(rurl, '/by-puuid');
    }
    name = '/by-puuid';
}

class SCOREURL extends RiotURL {
    static chain(rurl: RiotURL) {
        return new SCOREURL(rurl, '/scores');
    }

    name = '/scores';
}

class PLTURL extends RiotURL {
    static chain(rurl: RiotURL) {
        return new PLTURL(rurl, '/platform');
    }

    name = '/platform';

    V3 = () => V3URL.chain(this);
    V4 = () => V4URL.chain(this);
}

class CRURL extends RiotURL {
    static chain(rurl: RiotURL) {
        return new CRURL(rurl, '/champion-rotations');
    }

    name = '/champion-rotations';
}

class LEGURL extends RiotURL {
    static chain(rurl: RiotURL) {
        return new LEGURL(rurl, '/league');
    }

    name = '/league';

    V4 = () => V4URL.chain(this);
}

class LEGSURL extends RiotURL {
    static chain(rurl: RiotURL) {
        return new LEGSURL(rurl, '/leagues');
    }

    name = '/leagues';
}

class CLEGSURL extends RiotURL {
    static chain(rurl: RiotURL) {
        return new CLEGSURL(rurl, '/challengerleagues');
    }

    name = '/challengerleagues';

    BYQ = () => BYQURL.chain(this);
}
class MLEGSURL extends RiotURL {
    static chain(rurl: RiotURL) {
        return new MLEGSURL(rurl, '/masterleagues');
    }

    name = '/masterleagues';

    BYQ = () => BYQURL.chain(this);
}
class GLEGSURL extends RiotURL {
    static chain(rurl: RiotURL) {
        return new GLEGSURL(rurl, '/grandmasterleagues');
    }

    name = '/grandmasterleagues';

    BYQ = () => BYQURL.chain(this);
}

class ENTURL extends RiotURL {
    static chain(rurl: RiotURL) {
        return new ENTURL(rurl, '/entries');
    }

    name = '/entries';

    BYS = () => BYSURL.chain(this);
    BYQ = () => BYQURL.chain(this);
}

class STUSURL extends RiotURL {
    static chain(rurl: RiotURL) {
        return new STUSURL(rurl, '/status');
    }

    name = '/status';

    V3 = () => V3URL.chain(this);

}

class SHRDULR extends RiotURL {
    static chain(rurl: RiotURL) {
        return new SHRDULR(rurl, '/shard-data');
    }

    name = '/shard-data';
}

class MTCHURL extends RiotURL {
    static chain(rurl: RiotURL) {
        return new MTCHURL(rurl, '/match');
    }

    name = '/match';

    V4 = () => V4URL.chain(this);
}

class MTCHSURL extends RiotURL {
    static chain(rurl: RiotURL) {
        return new MTCHSURL(rurl, '/matches');
    }

    name = '/matches';

    BYTC = () => BYTCURL.chain(this);
}

class MTCHLURL extends RiotURL {
    static chain(rurl: RiotURL) {
        return new MTCHLURL(rurl, '/matchlists');
    }

    name = '/matchlists';

    BYA = () => BYAURL.chain(this);
}

class TMLURL extends RiotURL {
    static chain(rurl: RiotURL) {
        return new TMLURL(rurl, '/timelines');
    }

    name = '/timelines';

    BYTC = () => BYTCURL.chain(this);
    BYM = () => BYMURL.chain(this);
}

class SPECURL extends RiotURL {
    static chain(rurl: RiotURL) {
        return new SPECURL(rurl, '/spectator');
    }

    name = '/spectator';

    V4 = () => V4URL.chain(this);
}

class FETGURL extends RiotURL {
    static chain(rurl: RiotURL) {
        return new FETGURL(rurl, '/featured-games');
    }

    name = '/featured-games';
}

class ACTGURL extends RiotURL {
    static chain(rurl: RiotURL) {
        return new ACTGURL(rurl, '/active-games');
    }

    name = '/active-games';

    BYS = () => BYSURL.chain(this);
}

class SUMURL extends RiotURL {
    static chain(rurl: RiotURL) {
        return new SUMURL(rurl, '/summoner');
    }

    name = '/summoner';

    V4 = () => V4URL.chain(this);
}

class SUMSURL extends RiotURL {
    static chain(rurl: RiotURL) {
        return new SUMSURL(rurl, '/summoners');
    }

    name = '/summoners';

    V4 = () => V4URL.chain(this);
    BYA = () => BYAURL.chain(this);
    BYN = () => BYNURL.chain(this);
    BYP = () => BYPURL.chain(this);
}

class TPCURL extends RiotURL {
    static chain(rurl: RiotURL) {
        return new TPCURL(rurl, '/third-party-code');
    }

    name = '/third-party-code';

    BYS = () => BYSURL.chain(this);
}
