import mongoose from 'mongoose'

const { Schema } = mongoose

const questionSchema = new Schema({
    category: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    answers: [
        {
            content: String,
            correct: Boolean,
        },
    ],
    explanation: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
})

const Question = mongoose.model('Question', questionSchema)

export default Question
