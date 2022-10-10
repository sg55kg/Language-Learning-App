import userDeckModel from "../../../../models/userDeckModel.js";
import express from "express";

const userDecksRouter = express.Router()

userDecksRouter.get('/:uid', async (req, res) => {
    try {
        const userDecks = await userDeckModel.find({ userId: req.params.uid })
        res.status(200).send(userDecks)
    } catch (err) {
        res.status(404).send()
    }
})

userDecksRouter.post('/', async (req, res) => {
    try {
        const { userDeck } = req.body
        const { _id } = await userDeckModel.create(userDeck)
        res.status(201).send(_id)
    } catch (err) {
        res.status(401).send()
    }
})

userDecksRouter.put('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { userDeck } = req.body
        await userDeckModel.findByIdAndUpdate(id, userDeck)
        res.status(201).send()
    } catch (err) {
        res.status(404).send()
    }
})

userDecksRouter.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        await userDeckModel.findByIdAndDelete(id)
        res.status(200).send()
    } catch (err) {
        res.status(404).send()
    }
})

export default userDecksRouter