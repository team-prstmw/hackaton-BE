import { StatusCodes } from 'http-status-codes'
import {
    getAllQuestions,
    getQuestionById,
    createQuestion,
    deleteQuestion,
} from '../controllers/question.controllers'

const questionsRoutes = (router) => {
    router.get('/questions', async (req, res) => {
        const response = await getAllQuestions(req.body)
        return res.status(StatusCodes.OK).json(response)
    })

    router.get('/questions/:id', async (req, res) => {
        const { id } = req.params
        const response = await getQuestionById(id)
        if (!response) {
            return res.status(StatusCodes.NOT_FOUND).json(response)
        }
        res.status(StatusCodes.OK).json(response)
    })

    router.post('/questions', async (req, res) => {
        const response = await createQuestion(req.body)

        if (response.status === 'invalid') {
            return res.status(StatusCodes.BAD_REQUEST).json(response)
        }
        res.status(StatusCodes.CREATED).json(response)
    })

    router.delete('/questions/:id', async (req, res) => {
        const { id } = req.params
        const response = await deleteQuestion(id)

        if (!response) {
            return res.status(StatusCodes.NOT_FOUND).json(response)
        }
        res.status(StatusCodes.OK).json(response)
    })
}

export default questionsRoutes
