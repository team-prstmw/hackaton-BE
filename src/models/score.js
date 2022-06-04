import mongoose, { Schema } from 'mongoose'

const scoreSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        required: true,
    },
})

const Score = mongoose.model('Score', scoreSchema)

export default Score
