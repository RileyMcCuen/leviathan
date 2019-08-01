import { MockEndpoint, Operations, Route } from './endpoint';

export const routes: Route[] = [
    {
        endpoint: new MockEndpoint(),
        methods: Operations(true, true, true, true),
        name: 'mock'
    }
];
