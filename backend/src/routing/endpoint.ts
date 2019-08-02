import express from 'express';
import { RequestHandler } from 'express-serve-static-core';
import { Tick } from '../rate-limiting/decorator';
import { SupportedOperations } from './endpoint';

export interface Endpoint {
    ops?: SupportedOperations;
    get?(req: express.Request, res: express.Response): void;
    post?(req: express.Request, res: express.Response): void;
    put?(req: express.Request, res: express.Response): void;
    delete?(req: express.Request, res: express.Response): void;
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

function operations(
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

// tslint:disable-next-line: max-classes-per-file
export class SupportedOpertionsFactory {
    static ALL = new SupportedOpertionsFactory()
        .get()
        .post()
        .put()
        .del()
        .build();

    static GET_ONLY = new SupportedOpertionsFactory().get().build();

    static POST_ONLY = new SupportedOpertionsFactory().post().build();

    static PUT_ONLY = new SupportedOpertionsFactory().put().build();

    static DELETE_ONLY = new SupportedOpertionsFactory().del().build();

    constructor(
        private supOp: SupportedOperations = operations(
            false,
            false,
            false,
            false
        )
    ) {}

    get(): SupportedOpertionsFactory {
        this.supOp.get = !this.supOp.get;
        return this;
    }

    post(): SupportedOpertionsFactory {
        this.supOp.post = !this.supOp.post;
        return this;
    }

    put(): SupportedOpertionsFactory {
        this.supOp.put = !this.supOp.put;
        return this;
    }

    del(): SupportedOpertionsFactory {
        this.supOp.delete = !this.supOp.delete;
        return this;
    }

    build(): SupportedOperations {
        return this.supOp;
    }
}

export interface Route {
    endpoint?: Endpoint;
    extraHandlers?: RequestHandler[];
    children?: Route[];
    methods?: SupportedOperations;
    name: string;
}
