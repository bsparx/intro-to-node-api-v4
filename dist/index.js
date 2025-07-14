import app from './server.js';
import * as dotenv from 'dotenv';
dotenv.config();
import config from './config/local.js';
app.listen(config.port, () => {
    console.log("Listening");
});
