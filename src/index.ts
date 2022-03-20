import app from './app';
import { logger } from './utilities/logger';

const port: number = parseInt(process.env.PORT, 10);

app.listen(port, () => {
  logger.info('server started', { port: process.env.PORT });
});
