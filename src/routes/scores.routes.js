import { StatusCodes } from 'http-status-codes'
import {
    getAllScores,
    getScoreById,
    addScore,
} from '../controllers/score.controller'

const scoreRoutes = (router) => {
    router.get('/scores', async (req, res) => {
        const response = await getAllScores(req.body)
        return res.status(StatusCodes.OK).json(response)
    })

    router.get('/scores/:id', async (req, res) => {
        const { id } = req.params
        const response = await getScoreById(id)
        if (!response) {
            return res.status(StatusCodes.NOT_FOUND).json(response)
        }
        res.status(StatusCodes.OK).json(response)
    })

    router.post('/scores', async (req, res) => {
        const response = await addScore(req.body)

        if (response.status === 'invalid') {
            return res.status(StatusCodes.BAD_REQUEST).json(response)
        }
        res.status(StatusCodes.CREATED).json(response)
    })
}

export default scoreRoutes
