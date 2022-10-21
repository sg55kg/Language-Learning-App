import mongoose from "mongoose";

const userDeckSchema = mongoose.Schema({
    name: String,
    parentDeckId: String,
    createdAt: Date,
    lastUpdated: Date,
    userId: String,
    language: String,
    cards: [
        {
            front: String,
            answer: String,
            exampleSentences: [String],
            createdAt: Date,
            correctAttempts: Number,
            incorrectAttempts: Number,
            nextDateShown: Date,
        }
    ]
})

const userDeckModel = mongoose.model('userDeck', userDeckSchema)

export default userDeckModel