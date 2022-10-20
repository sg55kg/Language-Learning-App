import {ActionContext, ActionTree, Getter, GetterTree, MutationTree} from "vuex";
import {Deck} from "../../../types";
import DeckService from "@/services/DeckService";

interface State {
    decks: Deck[],
    error: string
}

const state: State = {
    decks: [],
    error: ''
}

type Getters = {
    allDecks(state: State): Deck[],
    error(state: State): string
}

type Actions = {
    fetchDecks(context: ActionContext<State, State>): Promise<void>,
    addDeck(context: ActionContext<State, State>, deck: Deck): Promise<void>
}

type Mutations = {
    setDecks(state: State, decks: Deck[]): void,
    addDeck(state: State, deck: Deck): void,
    setError(state: State, errorMessage: string): void
}

const getters: GetterTree<State, any> & Getters = {
    allDecks: state => state.decks,
    error: state => state.error
}

const actions: ActionTree<State, any> & Actions = {
    async fetchDecks({ commit }) {
        try {
            commit('setError', '')
            const decksArr = await DeckService.getDecks()
            commit('setDecks', decksArr)
        } catch (err: any) {
            commit('setError', 'Sorry, we\'re having trouble fetching community decks right now')
        }
    },
    async addDeck({ commit }, deck: Deck) {
        try {
            commit('setError', '')
            const id = await DeckService.postDeck(deck)
            const newDeck = {...deck, id}
            commit('addDeck', newDeck)
        } catch (err: any) {
            commit('setError', 'Sorry, your deck could not be added at this time')
        }
    }
}

const mutations: MutationTree<State> & Mutations = {
    setDecks: (state, decks: Deck[]) => (state.decks = decks),
    addDeck: (state, deck: Deck) => (state.decks.unshift(deck)),
    setError: (state, errorMessage: string) => (state.error = errorMessage)
}

export default {
    state,
    getters,
    actions,
    mutations
}