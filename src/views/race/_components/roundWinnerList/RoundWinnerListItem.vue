<template>
  <RListItem class="lg:grid-rows-1 grid-rows-4 lg:grid-cols-4">
    <div class="text-center lg:text-left">{{ round }}</div>
    <div class="text-center lg:text-left">{{ result.horse.name }}</div>
    <div class="text-center lg:text-left">{{ result.horse.speed }}</div>
    <div class="flex justify-center lg:justify-start">
      <RColorCell :color="result.horse.color" />
    </div>
  </RListItem>
</template>

<script lang="ts" setup>
import type { IResult } from '@/common/interfaces/result.interface';

interface IProps {
  result: IResult;
  round: number;
}

defineProps<IProps>();
</script>
