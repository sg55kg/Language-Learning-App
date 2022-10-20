<template>
  <div class="home">
    <header>
      <h1>Learnalang</h1>
    </header>
    <main>
      <div>
        <p>Number of new cards per day</p>
      </div>
      <UserDecksList />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import UserDecksList from "@/components/UserDecksList.vue";
import CommunityDecksList from "@/components/CommunityDecksList.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    UserDecksList,
  },
});
</script>
