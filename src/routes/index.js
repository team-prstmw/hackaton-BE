import {Router} from 'express';

import questionsRoutes from './questions.routes';
import highscoreRoutes from './highscore.routes';

const router = Router();

questionsRoutes(router);
highscoreRoutes(router);

export default router;