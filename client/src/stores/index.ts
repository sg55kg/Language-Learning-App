import Vuex, { createStore } from 'vuex'
import Vue from 'vue'
import auth from '@/stores/modules/auth'
import communityDecks from "@/stores/modules/communityDecks";
import userDecks from "@/stores/modules/userDecks";

const store = createStore({
    modules: {
        auth,
        communityDecks,
        userDecks
    },
})

export default store