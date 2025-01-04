<template>
  <RaceLayout>
    <template #hippodrome>
      <Hippodrome />
    </template>
    <template #horse-list>
      <HorseList />
    </template>

    <template #programs>
      <ProgramList />
    </template>

    <template #results>
      <ResultList />
    </template>
  </RaceLayout>
</template>

<script setup lang="ts">
import RaceLayout from '@/layouts/race/RaceLayout.vue';
import HorseList from '../_components/horseList/HorseList.vue';
import ProgramList from '../_components/programList/ProgramList.vue';
import ResultList from '../_components/resultList/ResultList.vue';
import Hippodrome from '../_components/hippodrome/Hippodrome.vue';
</script>

<style scoped></style>
