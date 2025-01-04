<template>
  <section class="flex flex-col gap-4 my-8">
    <RCard v-if="hasRaceEnded" title="Round Winners">
      <template #body>
        <RoundWinnerList />
      </template>
    </RCard>

    <slot v-else name="hippodrome" />

    <div class="grid gap-4 grid-cols-1 lg:grid-cols-3">
      <RCard title="Horse List">
        <template #body>
          <slot name="horse-list" />
        </template>
      </RCard>

      <RCard title="Race Schedule">
        <template #body>
          <slot name="schedule" />
        </template>
      </RCard>

      <RCard title="Results">
        <template #body>
          <slot name="results" />
        </template>
      </RCard>
    </div>
  </section>
</template>

<script setup lang="ts">
import RoundWinnerList from '@/views/race/_components/roundWinnerList/RoundWinnerList.vue';
import { useRacingBoardStore } from '@/stores/racingBoard';
import { computed } from 'vue';

const racingBoardStore = useRacingBoardStore();

const hasRaceEnded = computed(() => {
  return racingBoardStore.isRaceEnded;
});
</script>

<style scoped></style>
