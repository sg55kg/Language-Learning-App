import mongoose from 'mongoose';

const deckSchema = new mongoose.Schema({
    name: String,
    language: String,
    createdAt: Date,
    description: String,
    cards: [{
        answer: String,
        createdAt: Date
    }]
})

const deckModel = mongoose.model('decks', deckSchema)

export default deckModel
