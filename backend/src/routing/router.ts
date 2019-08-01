import express from 'express';
import { routes } from './routes';

export function build() {
    const router = express.Router();
    routes.forEach((route, index) => {
        if (!route.methods && !route.endpoint.ops) {
            throw new Error('Supported methods must be supplied somewhere!');
        }
        const methods = route.methods ? route.methods : route.endpoint.ops;
        if (methods.get) {
            if (route.extraHandlers) {
                router.get(
                    `/${route.name}`,
                    ...route.extraHandlers,
                    route.endpoint.get
                );
            } else {
                router.get(`/${route.name}`, route.endpoint.get);
            }
        }
        if (methods.post) {
            if (route.extraHandlers) {
                router.post(
                    `/${route.name}`,
                    ...route.extraHandlers,
                    route.endpoint.post
                );
            } else {
                router.post(`/${route.name}`, route.endpoint.post);
            }
        }
        if (methods.put) {
            if (route.extraHandlers) {
                router.put(
                    `/${route.name}`,
                    ...route.extraHandlers,
                    route.endpoint.put
                );
            } else {
                router.put(`/${route.name}`, route.endpoint.put);
            }
        }
        if (methods.delete) {
            if (route.extraHandlers) {
                router.delete(
                    `/${route.name}`,
                    ...route.extraHandlers,
                    route.endpoint.delete
                );
            } else {
                router.delete(`/${route.name}`, route.endpoint.delete);
            }
        }
    });
    return router;
}
