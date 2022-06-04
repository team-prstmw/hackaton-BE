import Score from '../models/score'

export const getAllScores = async () => {
    const data = await Score.find().exec()

    if (!data || !Array.isArray(data)) {
        return { status: 'error', message: 'Error while fetching scores.' }
    }
    return { status: 'success', data }
}

export const getScoreById = async (id) => {
    const data = await Score.findById(id).exec()

    if (!data || !data._id) {
        return { status: 'invalid', message: `${id} doesn't exist.` }
    }
    return { status: 'success', data }
}

export const addScore = async (scoreData) => {
    const score = new Score(scoreData)
    try {
        const newScore = await score.save()
        return { status: 'success', newScore }
    } catch (err) {
        return { status: 'invalid', message: err }
    }
}
