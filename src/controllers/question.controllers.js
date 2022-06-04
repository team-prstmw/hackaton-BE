import Question from '../models/question'

export const getAllQuestions = async () => {
    const data = await Question.find().exec()

    if (!data || !Array.isArray(data)) {
        return { status: 'error', message: 'Error while fetching questions.' }
    }

    return { status: 'success', data }
}

export const getQuestionById = async (id) => {
    const data = await Question.findById(id).exec()

    if (!data || !data._id) {
        return { status: 'invalid', message: `Question doesn't exist.` }
    }
    return { status: 'success', data }
}

export const createQuestion = async (questionData) => {
    const question = new Question(questionData)
    try {
        const newQuestion = await question.save()
        return { status: 'success', newQuestion }
    } catch (err) {
        return { status: 'invalid', message: err }
    }
}

export const deleteQuestion = async (id) => {
    const question = await Question.findOne(id)

    if (!question || !question._id) {
        return { status: 'error', message: `Question doesn't exist.` }
    }

    await question.save()
}
