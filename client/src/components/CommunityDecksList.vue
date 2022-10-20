<template>
  <div>
    <div v-for="deck in allDecks" :key="deck._id">
      {{ deck.name }}
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";

export default {
  name: "CommunityDecksList",
  methods: {
    ...mapActions(['fetchDecks'])
  },
  computed: mapGetters(['allDecks']),
  created() {
    this.fetchDecks()
  }
}
</script>

<style scoped>

</style>