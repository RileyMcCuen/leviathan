// tslint:disable: object-literal-sort-keys
import { LoginEndpoint } from './../leviathan-api/auth/login';
import { RegisterEndpoint } from './../leviathan-api/auth/register';
import { MockEndpoint, Route, SupportedOpertionsFactory } from './endpoint';

export const routes: Route[] = [
    {
        name: 'mock',
        endpoint: new MockEndpoint(),
        methods: SupportedOpertionsFactory.ALL,
    },
    {
        name: 'auth',
        children: [
            {
                name: 'login',
                endpoint: new LoginEndpoint(),
                methods: SupportedOpertionsFactory.POST_ONLY,
            },
            {
                name: 'register',
                endpoint: new RegisterEndpoint(),
                methods: SupportedOpertionsFactory.POST_ONLY
            }
        ]
    }
];
