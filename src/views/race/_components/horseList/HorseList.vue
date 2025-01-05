<template>
  <ul class="flex flex-col gap-2 p-0">
    <HorseListHeader />
    <HorseListItem v-for="(horse, idx) in racingBoardStore.horseList" :key="idx" :horse="horse" />
  </ul>
</template>

<script setup lang="ts">
import HorseListHeader from './HorseListHeader.vue';
import HorseListItem from './HorseListItem.vue';
import { useRacingBoardStore } from '@/stores/racingBoard';

const racingBoardStore = useRacingBoardStore();
</script>

<style scoped></style>
