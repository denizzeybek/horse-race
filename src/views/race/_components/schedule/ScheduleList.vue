<template>
  <div v-for="(schedule, idx) in racingBoardStore.raceScheduleList" :key="idx">
    <div class="flex justify-start bg-orange-200 px-4 rounded-md">
      <RText as="p">{{ `${schedule.round}. Race ${schedule.distance}m` }}</RText>
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
      <ProgramListItem
        v-for="(horse, idx) in schedule.horses"
        :key="idx"
        :position="idx + 1"
        :horse="horse"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import ProgramListItem from './ScheduleListItem.vue';
import { useRacingBoardStore } from '@/stores/racingBoard';

const racingBoardStore = useRacingBoardStore();
</script>

<style scoped></style>
