import express from 'express';
import { Router } from 'express-serve-static-core';
import { Route } from './endpoint';
import { routes } from './routes';

export function build() {
    const router = express.Router();
    buildRoutes('/', router, routes);
    return router;
}

function buildRoutes(prefix: string, router: Router, rs: Route[]) {
    rs.forEach((route: Route) => buildRoute(prefix, router, route));
}

function buildRoute(prefix: string, router: Router, route: Route) {
    if (route.endpoint) {
        if (!route.methods && !route.endpoint.ops) {
            throw new Error('Supported methods must be supplied somewhere!');
        }
        const methods = route.methods ? route.methods : route.endpoint.ops;
        if (methods.get) {
            if (route.extraHandlers) {
                router.get(
                    `${prefix}${route.name}`,
                    ...route.extraHandlers,
                    route.endpoint.get
                );
            } else {
                router.get(`${prefix}${route.name}`, route.endpoint.get);
            }
        }
        if (methods.post) {
            if (route.extraHandlers) {
                router.post(
                    `${prefix}${route.name}`,
                    ...route.extraHandlers,
                    route.endpoint.post
                );
            } else {
                router.post(`${prefix}${route.name}`, route.endpoint.post);
            }
        }
        if (methods.put) {
            if (route.extraHandlers) {
                router.put(
                    `${prefix}${route.name}`,
                    ...route.extraHandlers,
                    route.endpoint.put
                );
            } else {
                router.put(`${prefix}${route.name}`, route.endpoint.put);
            }
        }
        if (methods.delete) {
            if (route.extraHandlers) {
                router.delete(
                    `${prefix}${route.name}`,
                    ...route.extraHandlers,
                    route.endpoint.delete
                );
            } else {
                router.delete(`${prefix}${route.name}`, route.endpoint.delete);
            }
        }
    } else if (!route.children) {
        throw new Error(
            'No endpoint or children were specified for this route, therefore it is invalid.'
        );
    }
    if (route.children) {
        buildRoutes(prefix + route.name + '/', router, route.children);
    }
}
