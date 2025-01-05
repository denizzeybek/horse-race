<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<template>
  <RListItem class="lg:grid-rows-1 grid-rows-3 lg:grid-cols-4">
    <div class="lg:col-span-2 text-center lg:text-left">
      <RText as="p">{{ horse.name }}</RText>
    </div>
    <div class="text-center lg:text-left">
      <RText as="p">{{ horse.speed }}</RText>
    </div>
    <div class="flex justify-center lg:justify-start">
      <RColorCell :color="horse.color" />
    </div>
  </RListItem>
</template>

<script lang="ts" setup>
import type { IHorse } from '@/common/interfaces/horse.interface';

interface IProps {
  horse: IHorse;
}

defineProps<IProps>();
</script>
