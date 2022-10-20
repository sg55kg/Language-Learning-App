import axios from "axios";
import {User} from "../../../types";
import {ActionTree, GetterTree, MutationTree} from "vuex";

interface State {
    user: User | null
}
const state: State = {
    user: null,
}

const getters: GetterTree<State, State> = {

}

const actions: ActionTree<State, State> = {

}

const mutations: MutationTree<State> = {

}

export default {
    state,
    getters,
    actions,
    mutations
}