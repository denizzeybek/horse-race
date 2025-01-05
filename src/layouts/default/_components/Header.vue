<template>
  <div
    class="flex flex-col lg:flex-row justify-between items-center gap-2 bg-r-white rounded-md py-3 lg: px-5 sticky top-0 z-10"
  >
    <RText as="h2">Horse Racing</RText>
    <div class="flex gap-2">
      <RButton @click="handleGenerateNewHorses" :is-disabled="isGenerateNewHorsesDisabled">Generate New Horses</RButton>
      <RButton @click="handleGenerateSchedule" :is-loading="isGeneratingSchedule"
        >Generate Race Schedule</RButton
      >
      <RButton @click="handleStartRace" :is-disabled="isStartRaceDisabled">Start Race</RButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRace } from '@/composables/useRace';
import { useRacingBoardStore } from '@/stores/racingBoard';
import { computed, ref } from 'vue';

const racingBoardStore = useRacingBoardStore();
const { startRace } = useRace();

const isGeneratingSchedule = ref(false);

const isStartRaceDisabled = computed(
  () =>
    !racingBoardStore.raceScheduleList.length ||
    isGeneratingSchedule.value ||
    racingBoardStore.isRaceEnded,
);

const isGenerateNewHorsesDisabled = computed(() => {
  return racingBoardStore.isRaceStarted && !racingBoardStore.isRaceEnded;
})

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

const handleGenerateNewHorses = () => {
  racingBoardStore.resetRace();
};
</script>
