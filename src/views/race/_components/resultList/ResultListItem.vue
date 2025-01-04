<template>
  <RListItem class="lg:grid-rows-1 grid-rows-4 lg:grid-cols-4">
    <div class="text-center lg:text-left">{{ result.position }}</div>
    <div class="text-center lg:text-left">{{ result.horse.name }}</div>
    <div class="text-center lg:text-left">{{ result.horse.speed }}</div>
    <div class="text-center lg:text-left">
      <RColorCell :color="result.horse.color" />
    </div>
  </RListItem>
</template>

<script lang="ts" setup>
import type { IResult } from '@/common/interfaces/result.interface';

interface IProps {
  result: IResult;
}

defineProps<IProps>();
</script>
