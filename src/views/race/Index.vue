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
import RaceLayout from '@/layouts/race/Index.vue';
import Hippodrome from '@/views/race/_components/hippodrome/Hippodrome.vue';
import HorseList from '@/views/race/_components/horseList/HorseList.vue';
import ResultList from '@/views/race/_components/resultList/ResultList.vue';
import ScheduleList from '@/views/race/_components/schedule/ScheduleList.vue';
</script>

<style scoped></style>
