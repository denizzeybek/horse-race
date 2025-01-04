<template>
  <ul class="flex flex-col gap-2 p-0">
    <li
      class="items-center hidden gap-2 px-12 mb-2 text-sm font-normal rounded-lg lg:grid-rows-1 lg:grid grid-cols-4 text-r-secondary"
    >
      <div>Round</div>
      <div>Name</div>
      <div>Condition</div>
      <div>Color</div>
    </li>
    <RoundWinnerListItem
      v-for="(result, idx) in racingBoardStore.getRoundWinners"
      :key="idx"
      :result="result"
      :round="idx + 1"
    />
  </ul>
</template>

<script setup lang="ts">
import RoundWinnerListItem from './RoundWinnerListItem.vue';
import { useRacingBoardStore } from '@/stores/racingBoard';

const racingBoardStore = useRacingBoardStore();
</script>

<style scoped></style>
