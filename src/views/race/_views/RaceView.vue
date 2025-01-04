<template>
  <RaceLayout>
    <template #hippodrome>
      <Hippodrome />
    </template>
    <template #horse-list>
      <HorseList />
    </template>

    <template #schedule>
      <ScheduleList />
    </template>

    <template #results>
      <ResultList />
    </template>
  </RaceLayout>
</template>

<script setup lang="ts">
import RaceLayout from '@/layouts/race/RaceLayout.vue';
import Hippodrome from '../_components/hippodrome/Hippodrome.vue';
import HorseList from '../_components/horseList/HorseList.vue';
import ResultList from '../_components/resultList/ResultList.vue';
import ScheduleList from '../_components/schedule/ScheduleList.vue';
</script>

<style scoped></style>
