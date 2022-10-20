<template>
  <div>
    <h1>My Decks</h1>
    <div>
      <button @click="toggleModal()">Create New Deck</button>
    </div>
    <div v-for="deck in allUserDecks" :key="deck._id">
      <h3>{{ deck.name }}</h3>
    </div>
    <CreateUserDeckForm v-if="viewModal" @toggle-modal="toggleModal" />
    <div v-else></div>
  </div>
</template>

<script>

import {mapActions, mapGetters} from "vuex";
import CreateUserDeckForm from "@/components/CreateUserDeckForm";

export default {
  name: "UserDecksList",
  components: {CreateUserDeckForm},
  data: () => ({
    viewModal: false
  }),
  methods: {
    ...mapActions(['fetchUserDecks']),
    toggleModal() {
      this.viewModal = !this.viewModal
    }
  },
  computed: mapGetters(['allUserDecks']),
  created() {
    this.fetchUserDecks('TestUser')
  }
  // async created() {
  //   try {
  //     this.decks = await DeckService.getDecks();
  //     console.log(this.decks)
  //   } catch (err) {
  //     this.error = err.message;
  //     console.log(err);
  //   }
  // },
};
</script>

<style scoped></style>
