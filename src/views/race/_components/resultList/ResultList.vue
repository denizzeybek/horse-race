<template>
  <template v-if="groupedResults.length > 0">
    <div v-for="(item, idx) in groupedResults" :key="idx">
      <div class="flex justify-start bg-orange-200 px-4 rounded-md">
        <RText as="p">{{ `${item.round}. Race ${item.distance}m` }}</RText>
      </div>
      <ul class="flex flex-col gap-2 p-0">
        <li
          class="items-center hidden gap-2 px-12 mb-2 text-sm font-normal rounded-lg lg:grid-rows-1 lg:grid grid-cols-4 text-r-secondary"
        >
          <div>Position</div>
          <div>Name</div>
          <div>Condition</div>
          <div>Color</div>
        </li>
        <ResultListItem v-for="(result, idx) in item.results" :key="idx" :result="result" />
      </ul>
    </div>
  </template>
  <RSkeleton v-else />
</template>

<script setup lang="ts">
import ResultListItem from './ResultListItem.vue';
import { useRacingBoardStore } from '@/stores/racingBoard';
import { computed } from 'vue';

const racingBoardStore = useRacingBoardStore();

const groupedResults = computed(() => {
  return racingBoardStore.groupedResults ?? [];
});
</script>

<style scoped></style>
