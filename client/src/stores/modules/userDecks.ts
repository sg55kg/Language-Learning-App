import {UserDeck} from "../../../types";
import {ActionContext, ActionTree, GetterTree, MutationTree} from "vuex";
import UserDeckService from "@/services/UserDeckService";


interface State {
    userDecks: UserDeck[],
    error: string
}

type Getters = {
    allUserDecks(state: State): UserDeck[],
    userDeckError(state: State): string
}

type Actions = {
    fetchUserDecks(context: ActionContext<State, State>, userId: string): Promise<void>,
    postUserDeck(context: ActionContext<State, State>, deck: UserDeck): Promise<void>
}

type Mutations = {
    setDecks(state: State, decks: UserDeck[]): void,
    setError(state: State, errorMessage: string): void
}

const state: State = {
    userDecks: [],
    error: ''
}

const getters: GetterTree<State, any> & Getters = {
    allUserDecks: (state) => state.userDecks,
    userDeckError: (state) => state.error
}

const actions: ActionTree<State, any> & Actions = {
    async fetchUserDecks({ commit }, userId: string) {
        try {
            commit('setError', '')
            const decks = await UserDeckService.getUserDecks(userId)
            commit('setDecks', decks)
        } catch (err: any) {
            commit('setError', 'Sorry, we\'re having trouble fetching your decks for you right now')
        }
    },

    async postUserDeck({ commit }, deck: UserDeck) {
        try {
            commit('setError', '')
            const _id = await UserDeckService.createUserDeck(deck)
            commit('setDecks', [...state.userDecks, { ...deck, _id }])
        } catch (err: any) {
            commit('setError', 'Sorry, your deck could not be saved at this time')
        }
    }
}

const mutations: MutationTree<State> & Mutations = {
    setDecks: (state, decks) => (state.userDecks = decks),
    setError: (state, errorMessage: string) => (state.error = errorMessage)
}

export default {
    state,
    getters,
    actions,
    mutations
}