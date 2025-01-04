<template>
  <ul class="flex flex-col gap-2 p-0">
    <li
      class="items-center hidden gap-2 px-12 mb-2 text-sm font-normal rounded-lg lg:grid-rows-1 lg:grid grid-cols-4 text-r-secondary"
    >
      <div class="lg:col-span-2">Name</div>
      <div>Condition</div>
      <div>Color</div>
    </li>
    <HorseListItem v-for="(horse, idx) in horseList" :key="idx" :horse="horse" />
  </ul>
</template>

<script setup lang="ts">
import HorseListItem from './HorseListItem.vue';
import type { IHorse } from '@/common/interfaces/horse.interface';

const horseList: IHorse[] = [
  {
    name: 'horse1',
    condition: 80,
    color: 'red',
  },
  {
    name: 'horse2',
    condition: 90,
    color: 'blue',
  },
];
</script>

<style scoped></style>
