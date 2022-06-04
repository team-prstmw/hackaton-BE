import { StatusCodes } from 'http-status-codes';
import Question from './models/question'

const questionsRoutes = (router) => {
    router.get('/questions', async (req, res) => {
        const response = await Question.findAll();
        return res.status(StatusCodes.OK).json(response);
    });

    router.post('/questions', async (req, res) => {
        const response = await addQuestion(req.body);
        
        if(response.status === 'invalid') {
            return res.status(StatusCodes.BAD_REQUEST).json(response);
        }
        return res.status(StatusCodes.CREATED).json(response);
    })
}