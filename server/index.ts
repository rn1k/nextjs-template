import fs from 'fs';
import http from 'http';
import https from 'https';

import next from 'next';
import express from 'express';

const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const ssl = process.env.SSL_ENABLE === '1';
const app = next({ dev });
const handleNextRequests = app.getRequestHandler();

app.prepare().then(() => {
    try {
        const expressApp = express();

        expressApp.use('*', (req, res, next) => {
            next();
        });

        expressApp.all('*', (req, res) => {
            return handleNextRequests(req, res);
        });

        let server;
        let listenMsg = '';
        if (dev || ssl) {
            const options = {
                // rootから鍵の相対パス
                key: fs.readFileSync('./key/mysslserver.key'),
                cert: fs.readFileSync('./key/mysslserver.crt'),
            };
            server = https.createServer(options, expressApp);
            listenMsg = `> Ready on https://localhost:${port}`;
        } else {
            server = http.createServer(expressApp);
            listenMsg = `> Ready on http://localhost:${port}`;
        }

        server.keepAliveTimeout = 0;

        server.listen(port, () => {
            console.log(listenMsg);
        });
    } catch (error) {
        console.log(error);
    }
});
