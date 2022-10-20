import axios from "axios";
import {Deck} from "../../types";

const URL = 'http://localhost:5000/api/v1/decks'

class DeckService {

    static async getDecks() {
        try {
            const { data } = await axios.get(URL)
            console.log(data)
            return data.map((deck: Deck) => ({
                ...deck,
                createdAt: new Date(deck.createdAt as string)
            }))
            } catch (err: any) {
                throw new Error(err.message)
            }
    }

    static async postDeck(deck: Deck) {
        try {
            const { data } = await axios.post(URL, deck)
            const { _id }: { _id: string } = data
            return _id
        } catch (err: any) {
            throw new Error(err.message)
        }

    }

    static async deleteDeck(id: string) {
        try {
            const { status } = await axios.delete(`${URL}/${id}`)
            return status
        } catch (err: any) {
            throw new Error(err.message)
        }
    }
}

export default DeckService