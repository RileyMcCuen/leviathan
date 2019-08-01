import express from 'express';
import { RequestHandler } from 'express-serve-static-core';
import {Tick} from '../rate-limiting/decorator';

export interface Endpoint {
    ops?: SupportedOperations;
    get(req: express.Request, res: express.Response): void;
    post(req: express.Request, res: express.Response): void;
    put(req: express.Request, res: express.Response): void;
    delete(req: express.Request, res: express.Response): void;
}

export class MockEndpoint implements Endpoint {
    @Tick.token(5)
    get(req: express.Request, res: express.Response): void {
        res.send('You have "get" the mock endpoint.');
    }
    post(req: express.Request, res: express.Response): void {
        res.send('You have "post" the mock endpoint.');
    }
    put(req: express.Request, res: express.Response): void {
        res.send('You have "put" the mock endpoint.');
    }
    delete(req: express.Request, res: express.Response): void {
        res.send('You have "delete" the mock endpoint.');
    }
}

export interface SupportedOperations {
    get: boolean;
    post: boolean;
    put: boolean;
    delete: boolean;
}

export function Operations(
    get = false,
    post = false,
    put = false,
    del = false
): SupportedOperations {
    return {
        delete: del,
        get,
        post,
        put
    };
}

export interface Route {
    methods?: SupportedOperations;
    endpoint: Endpoint;
    name: string;
    extraHandlers?: RequestHandler[];
}
