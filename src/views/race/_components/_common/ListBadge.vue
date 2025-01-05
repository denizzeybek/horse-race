<template>
  <div class="flex justify-start bg-orange-200 px-4 rounded-md">
    <RText as="p">{{ message }}</RText>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  message: string;
}

defineProps<IProps>();
</script>
