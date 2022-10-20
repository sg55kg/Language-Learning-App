import axios from "axios";
import {Deck, UserDeck} from "../../types";

const URL = 'http://localhost:5000/api/v1/userDecks'

class UserDeckService {

    static async getUserDecks(userId: string) {
        try {
            const { data } = await axios.get(`${URL}/${userId}`)
            console.log(data)
            return data.map((deck: Deck) => ({ ...deck, createdAt: new Date(deck.createdAt as string)}))
        } catch (err: any) {
            throw new Error(err)
        }
    }

    static async createUserDeck(deck: UserDeck) {
        try {
            console.log(deck)
            const { data } = await axios.post(URL, { userDeck: deck })
            return data._id
        } catch (err: any) {
            throw new Error(err)
        }
    }

    static async updateUserDeck(id: string, updatedDeck: any) {
        try {
            await axios.post(`${URL}/${id}`, updatedDeck)
        } catch (err: any) {
            throw new Error(err)
        }
    }

    static async deleteUserDeck(id: string) {
        try {
            await axios.delete(`${URL}/${id}`)
        } catch (err: any) {
            throw new Error(err)
        }
    }
}

export default UserDeckService