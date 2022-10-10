import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: String,
    providers: [],
    nativeLanguage: String,
    languages: [],
    photoURL: String,
    decks: [
        {
            deckId: String,
            language: String,
            cardCount: Number,
            lastReviewed: Date
        }
    ],
    token: String,
    refreshToken: String
})

const userModel = mongoose.model('users', userSchema)

export default userModel