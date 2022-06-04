import { Router } from 'express'

import questionsRoutes from './questions.routes'
import scoresRoutes from './scores.routes'

const router = Router()

questionsRoutes(router)
scoresRoutes(router)

export default router
