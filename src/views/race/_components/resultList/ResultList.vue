<template>
  <div v-for="(item, idx) in resultList" :key="idx">
    <div class="flex justify-start bg-orange-200 px-4 rounded-md">
      <RText as="p">{{ item.title }}</RText>
    </div>
    <ul class="flex flex-col gap-2 p-0">
      <li
        class="items-center hidden gap-2 px-12 mb-2 text-sm font-normal rounded-lg lg:grid-rows-1 lg:grid grid-cols-3 text-r-secondary"
      >
        <div>Position</div>
        <div class="lg:col-span-2">Name</div>
      </li>
      <ResultListItem v-for="(program, idx) in item.list" :key="idx" :program="program" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import ResultListItem from './ResultListItem.vue';
import type { IProgram } from '@/common/interfaces/program.interface';

interface IProgramList {
  title: string;
  list: IProgram[];
}

const resultList: IProgramList[] = [
  {
    title: '1st Lap',
    list: [
      {
        position: 1,
        horse: {
          name: 'horse1',
          condition: 80,
          color: 'red',
        },
      },
      {
        position: 2,
        horse: {
          name: 'horse2',
          condition: 90,
          color: 'blue',
        },
      },
    ],
  },
  {
    title: '2nd Lap',
    list: [
      {
        position: 1,
        horse: {
          name: 'horse1',
          condition: 80,
          color: 'red',
        },
      },
      {
        position: 2,
        horse: {
          name: 'horse2',
          condition: 90,
          color: 'blue',
        },
      },
    ],
  },
];
</script>

<style scoped></style>
