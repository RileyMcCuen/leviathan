// Imports
import express from 'express';
import { app, port } from './app/config';
import { AppCat } from './logging/config';
import { build } from './routing/router';

// Set up api endpoints
app.use(express.json());
app.use(build());

// Start the server
app.listen(port, () => {
    AppCat.info(() => `server running... http://localhost:${port}`);
});
