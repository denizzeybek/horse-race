<template>
  <RListItem class="lg:grid-rows-1 grid-rows-2 lg:grid-cols-3">
    <div class="text-center lg:text-left">{{ program.position }}</div>
    <div class="lg:col-span-2 text-center lg:text-left">{{ program.horse.name }}</div>
  </RListItem>
</template>

<script lang="ts" setup>
import type { IProgram } from '@/common/interfaces/program.interface';
interface IProps {
  program: IProgram;
}

defineProps<IProps>();
</script>
