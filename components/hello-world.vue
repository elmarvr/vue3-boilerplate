<script setup lang="ts">
const { $client } = useNuxtApp();

const { greeting } = await $client.greeting.greet.query({
  name: "World",
});
</script>

<template>
  <h1>
    {{ greeting }}
  </h1>
</template>
