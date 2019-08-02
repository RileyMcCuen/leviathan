import { Pool } from 'pg';
export const pool = new Pool({
  database: 'internal_api',
  host: 'localhost',
  password: 'Umbre3879!',
  port: 5432,
  user: 'Riley',
});
