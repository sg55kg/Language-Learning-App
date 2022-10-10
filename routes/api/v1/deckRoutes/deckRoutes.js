import deckModel from "../../../../models/deckModel.js"
import express from 'express'

const decksRouter = express.Router()

decksRouter.get('/', async (req, res) => {
    try {
        const decks = await deckModel.find()
        res.status(200).send(decks)
    } catch (err) {
        res.status(404).send()
    }

})

decksRouter.post('/', async (req, res) => {
    try {
        const { _id } = await deckModel.create({ ...req.body, createdAt: new Date() })
        res.status(201).send(_id)
    } catch (err) {
        res.status(401).send()
    }
})

decksRouter.delete('/:id', async (req, res) => {
    try {
        await deckModel.deleteOne({ _id: req.params.id })
        res.status(200).send()
    } catch (err) {
        res.status(401).send()
    }
})

export default decksRouter