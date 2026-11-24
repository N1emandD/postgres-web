import express from 'express';
import pg from 'pg';

const app = express();
const { Pool } = pg;

import { PGHOST, PORT, PGUSER, PGPASSWORD, PGPORT, PGDATABASE } from "./config.js";

const mypg = new Pool();

app.get('/', (req, res) => {
    res.send('Gray hairs on the dick(((');
});

app.get('/pgstatus', async (req,res) => {
    try {
        const status = await mypg.query('SELECT NOW()');
    } catch (err) {
        res.send('PostgresDB is not OK...');
    } finally {
        res.send('PostgresDB is OK!!!');
    };
});

app.get('/tables', async (req,res) => {
    try {
        const tables_list = await mypg.query(`SELECT * FROM pg_tables WHERE schemaname = 'public';`);
    } catch (err) {
        res.send('Something gone wrong...');
    } finally {
        res.send(await mypg.query(`SELECT * FROM pg_tables WHERE schemaname = 'public';`));
    };
});

app.listen(process.env.PORT, () => {
    console.log(`SIX SEVEN on http://localhost:${process.env.PORT} \nPGDB on the ${PGHOST}:${PGPORT}`);
});