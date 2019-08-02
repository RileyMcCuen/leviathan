import { Request, Response } from 'express-serve-static-core';
import { Users } from './../../postgres/users/queries';
import { Endpoint } from './../../routing/endpoint';

export class RegisterEndpoint implements Endpoint {
    post(req: Request, res: Response): void {
        const email = req.body.email;
        const password = req.body.password;
        Users.GETWE(email).then(
            (val) => {
                if (val.rowCount === 0) {
                    Users.NEW(email, 'name', password).then(
                        (val2) => {
                            res.status(201).json({
                                message: 'Account has been created.'
                            });
                        },
                        (reason) => {
                            res.status(500).json({ message: reason });
                        }
                    );
                } else {
                    res.status(409).json({
                        message: 'Email is already subscribed to an account.'
                    });
                }
            },
            (reason) => {
                res.status(400).json({ message: reason });
            }
        );
    }
}
