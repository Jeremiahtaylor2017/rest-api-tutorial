// dependencies
import express from 'express';
import config from 'config';
import connect from './utils/connect';
import logger from './utils/logger';
import routes from './routes';
import deserializeUser from './middleware/deserializeUser';

// initialize app
const app = express();
const port = config.get<number>('port');

// mount middleware
app.use(express.json());
app.use(deserializeUser);

// listener
app.listen(port, async () => {
    logger.info(`Server listening at http://localhost:${port}`);

    await connect();

    routes(app);
})