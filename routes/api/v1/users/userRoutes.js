import express from "express";
import userModel from "../../../../models/userModel.js";

const userRouter = express.Router()

userRouter.get('/', async (req, res) => {
    try {
        const users = await userModel.find()
        res.status(200).send(users)
    } catch (err) {
        res.status(404).send()
    }
})

userRouter.get('/:email', async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.params.email })
        res.status(200).send(user)
    } catch (err) {
        res.status(404).send()
    }
})

userRouter.put('/:id', async (req, res) => {
    try {
        const { user } = req.body
        await userModel.findByIdAndUpdate(req.params.id, user)
        res.status(201).send()
    } catch (err) {
        res.status(401).send()
    }
})

userRouter.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        await userModel.findByIdAndDelete(id)
        res.status(200).send()
    } catch (err) {
        res.status(401).send()
    }
})

export default userRouter