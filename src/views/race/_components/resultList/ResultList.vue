<template>
  <template v-if="groupedResults.length > 0">
    <div v-for="(item, idx) in groupedResults" :key="idx">
      <ListBadge :message="`${item.round}. Race ${item.distance}m`" />

      <ul class="flex flex-col gap-2 p-0">
        <ResultListHeader />
        <ResultListItem v-for="(result, idx) in item.results" :key="idx" :result="result" />
      </ul>
    </div>
  </template>
  <RListEmpty v-else message="No Data" />
</template>

<script setup lang="ts">
import ResultListHeader from './ResultListHeader.vue';
import ResultListItem from './ResultListItem.vue';
import { useRacingBoardStore } from '@/stores/racingBoard';
import { computed } from 'vue';
import ListBadge from '@/views/race/_components/_common/ListBadge.vue';

const racingBoardStore = useRacingBoardStore();

const groupedResults = computed(() => {
  return racingBoardStore.groupedResults ?? [];
});
</script>

<style scoped></style>
