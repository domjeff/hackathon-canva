import express from 'express';
import type { client } from "@hey-api/client-fetch";
import "dotenv/config";
import authRoutes from './handlers/auth';
import cookieParser from "cookie-parser";

const app = express();
const port = process.env.BACKEND_PORT;

/**
 * We extend the Express Request interface to include the custom properties
 * that will be injected by the `injectClient` middleware on routes where
 * that is added (which should be all authenticated routes).
 */
declare global {
    namespace Express {
        interface Request {
            // The Canva Connect client, configured for the current user
            client: typeof client;
            // The access token, in case you need to make a call to the
            // Connect API that isn't yet supported by the client
            token: string;
        }
    }
}

app.use(cookieParser(process.env.DATABASE_ENCRYPTION_KEY));

// Mount routes
app.use(authRoutes);

const dummyHandler = require('./handlers/dummy');

app.get('/dummy', dummyHandler.dummyProcess);

app.get('/', (req, res) => {
    res.send('Hello, TypeScript Node Express!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});