import { QueryResult } from 'pg';
import { pool } from '../config';
import { Hash } from '../decorator';
export class Users {

    static GETWE(email: string) {
        return new Promise<QueryResult>((resolve, reject) => {
            pool.query(
                'SELECT * FROM users WHERE email = $1',
                [email],
                (error, results) => {
                    if (error) {
                        reject(error.message);
                    } else {
                        resolve(results);
                    }
                }
            );
        });
    }

    @Hash(2)
    static NEW(email: string, username: string, password: string) {
        return new Promise<QueryResult>((resolve, reject) => {
            pool.query(
                'INSERT INTO users (email, username, password_hash) VALUES ($1, $2, $3)',
                [email, username, password],
                (error, results) => {
                    if (error) {
                        reject(error.message);
                    } else {
                        resolve(results);
                    }
                }
            );
        });
    }
}
