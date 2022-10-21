<template>
  <div class="overlay">
    <div class="modal">
      <div>
        <button @click="toggleModal()">Cancel</button>
      </div>
      <div class="modal-body">
        <input
            class="create-deck-input"
            type="text"
            v-model="newDeck.name"
            placeholder="Deck Name"
        >
        <select class="create-deck-input" v-model="newDeck.language">
          <option value="" disabled>Deck Language</option>
          <option
              v-for="language in languages"
              :key="language"
              :value="language">
            {{ language }}
          </option>
        </select>
        <hr>
        <div class="card-container">
          <h5>Card</h5>
          <input
              class="card-input"
              v-model="newCard.front"
              type="text"
              placeholder="Front of Card"
          >
          <input
              class="card-input"
              v-model="newCard.answer"
              type="text"
              placeholder="Back (answer)"
          >
          <p
              v-for="sentence in newCard.exampleSentences"
              :key="sentence"
          >
            {{ sentence }}
          </p>
          <input type="text" v-model="exampleSentence" onkeydown="addSentence">
          <button class="add-card-btn" @click="addCard">
            Add Card
          </button>
        </div>
        <button @click="onSubmit">
          Save Deck
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {languageList} from "@/data";
import {mapActions, mapState} from "vuex";

const blankCard = {
  front: '',
  answer: '',
  correctAttempts: 0,
  incorrectAttempts: 0,
  nextDateShown: '',
  exampleSentences: [] as string[]
}

export default defineComponent({
  name: "CreateUserDeckForm",
  methods: {
    ...mapActions(['postUserDeck']),
    toggleModal() {
      this.$emit('toggle-modal')
    },
    async onSubmit(e: MouseEvent) {
      e.preventDefault()
      let deckToAdd = {
        ...this.$data.newDeck,
        createdAt: new Date()
      }
      console.log(deckToAdd)
      await this.postUserDeck(deckToAdd)

    },
    addCard(e: MouseEvent) {
      e.preventDefault()
      console.log(this.$data.newCard)
      this.$data.newDeck.cards.push({ ...this.$data.newCard })
      this.$data.newCard = blankCard
      console.log(this.$data.newDeck)
    },
    addSentence(e: KeyboardEvent) {
      e.preventDefault()
      if(e.key === 'Enter') {
        this.$data.newCard.exampleSentences.push(this.$data.exampleSentence)
        this.$data.exampleSentence = ''
      }
    }
  },
  data() {
    return {
      newDeck: {
        name: '',
        language: '',
        userId: 'TestUser',
        cards: [] as any[]
      },
      newCard: {
        front: '',
        answer: '',
        exampleSentences: [] as string[],
        correctAttempts: 0,
        incorrectAttempts: 0,
        nextDateShown: '',
      },
      exampleSentence: '',
      languages: languageList,
      ...mapState(['error'])
    }
  },
})
</script>

<style scoped>
  .overlay {
    width: 100vw;
    height: 100vh;
    background: rgba(67, 68, 68, 0.16);
    position: absolute;
    top: 0;
    display: flex;
    align-content: center;
    justify-content: center;
  }
  .modal {
    width: 60%;
    height: 60%;
    background: white;
    border: 2px solid black;
    margin: auto;
  }
  .modal-body {
    padding: 1em;
  }
  .create-deck-input {
    padding: .5em;
    border: 1px solid lightgrey;
  }
  .card-container {
    display: flex;
    flex-direction: column;
  }
  .card-input {
    padding: .5em;
    margin: .5em;
  }
  .add-card-btn {
    margin: 2em auto;
    padding: 1em;
    background-color: #00B7FF;
    border-radius: 8px;
    border: 1px solid white;
    color: white;
  }
</style>