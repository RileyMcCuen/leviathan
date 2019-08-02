import bcrypt from 'bcrypt';
import { Request, Response } from 'express-serve-static-core';
import { Users } from './../../postgres/users/queries';
import { Endpoint } from './../../routing/endpoint';

export class LoginEndpoint implements Endpoint {
    post(req: Request, res: Response): void {
        Users.GETWE(req.body.email).then(
            (val) => {
                if (val.rowCount === 1) {
                    bcrypt
                        .compare(req.body.password, val.rows[0].password_hash)
                        .then(
                            (val2) => {
                                if (val2) {
                                    res.status(200).json({
                                        message: 'You have been logged in.'
                                    });
                                } else {
                                    res.status(400).json({
                                        message: 'Wrong password.'
                                    });
                                }
                            },
                            (reason) => {
                                res.status(400).json({ message: reason });
                            }
                        );
                } else {
                    res.status(400).json({
                        message: 'Supplied credentials are not in our database.'
                    });
                }
            },
            (reason) => {
                res.status(400).json({ message: reason });
            }
        );
    }
}
