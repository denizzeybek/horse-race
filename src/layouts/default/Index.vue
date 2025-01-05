<template>
  <main class="p-0 lg:px-4 lg:py-4 h-full">
    <Header />
    <div class="px-2 lg:px-0">
      <RouterView />
    </div>
  </main>
</template>

<script lang="ts" setup>
import Header from './_components/Header.vue';
</script>
