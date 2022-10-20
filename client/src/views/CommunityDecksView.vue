<template>
  <div class="home">
    <header>
      <h1>Learnalang</h1>
    </header>
    <main>
      <CommunityDecksList />
    </main>

  </div>
</template>

<script>
import CommunityDecksList from "@/components/CommunityDecksList";
export default {
  components: {CommunityDecksList}
}
</script>