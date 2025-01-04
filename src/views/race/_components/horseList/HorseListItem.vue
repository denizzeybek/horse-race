<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<template>
  <RListItem class="lg:grid-rows-1 grid-rows-3 lg:grid-cols-4">
    <div class="lg:col-span-2 text-center lg:text-left">{{ horse.name }}</div>
    <div class="text-center lg:text-left">{{ horse.speed }}</div>
    <div class="text-center lg:text-left">{{ horse.color }}</div>
  </RListItem>
</template>

<script lang="ts" setup>
import type { IHorse } from '@/common/interfaces/horse.interface';

interface IProps {
    horse: IHorse
}

defineProps<IProps>();

</script>
