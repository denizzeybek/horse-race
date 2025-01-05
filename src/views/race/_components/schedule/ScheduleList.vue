<template>
  <template v-if="racingBoardStore.raceScheduleList.length > 0">
    <div v-for="(schedule, idx) in racingBoardStore.raceScheduleList" :key="idx">
      <ListBadge :message="`${schedule.round}. Race ${schedule.distance}m`" />

      <ul class="flex flex-col gap-2 p-0">
        <ScheduleListHeader class="hidden lg:block"/>
        <ScheduleListItem
          v-for="(horse, idx) in schedule.horses"
          :key="idx"
          :position="idx + 1"
          :horse="horse"
        />
      </ul>
    </div>
  </template>
  <RListEmpty v-else message="No Data" />
</template>

<script setup lang="ts">
import ScheduleListItem from './ScheduleListItem.vue';
import { useRacingBoardStore } from '@/stores/racingBoard';
import ListBadge from '@/views/race/_components/_common/ListBadge.vue';
import ScheduleListHeader from './ScheduleListHeader.vue';
const racingBoardStore = useRacingBoardStore();
</script>

<style scoped></style>
