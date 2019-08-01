// Imports
import { app, port } from './app/config';
import { AppCat } from './logging/config';
import { build } from './routing/router';

// Set up api endpoints
app.use(build());

// Start the server
app.listen(port, () => {
    AppCat.info(() => `server running... http://localhost:${port}`);
});
