<template>
  <div class="flex justify-start py-3 bg-orange-200 px-4 rounded-md">
    <RText as="p">{{ message }}</RText>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  message: string;
}

defineProps<IProps>();
</script>
