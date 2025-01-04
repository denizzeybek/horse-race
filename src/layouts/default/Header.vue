<template>
  <div
    class="flex flex-col lg:flex-row justify-between items-center bg-r-white rounded-md pb-5 lg:pb-0 px-5"
  >
    <RText as="h2">Horse Racing</RText>
    <div class="flex gap-2">
      <RButton @click="handleGenerateSchedule" :is-loading="isGeneratingSchedule"
        >Generate Race Schedule</RButton
      >
      <RButton @click="handleStartRace" :is-disabled="isStartRaceDisabled">Start Race</RButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRaceResult } from '@/composables/useRaceResult';
import { useRacingBoardStore } from '@/stores/racingBoard';
import { computed, ref } from 'vue';

const racingBoardStore = useRacingBoardStore();
const { startRace } = useRaceResult();

const isGeneratingSchedule = ref(false);

const isStartRaceDisabled = computed(
  () => !racingBoardStore.raceScheduleList.length || isGeneratingSchedule.value,
);

const handleGenerateSchedule = async () => {
  isGeneratingSchedule.value = true;
  await new Promise((resolve) => setTimeout(resolve, 1500));
  await racingBoardStore.setRaceSchedule();
  racingBoardStore.setScheduleGenerated(true);
  isGeneratingSchedule.value = false;
};

const handleStartRace = () => {
  startRace(racingBoardStore.raceScheduleList);
};
</script>
