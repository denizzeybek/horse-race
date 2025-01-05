<template>
  <div
    class="w-[30px] h-[30px] rounded-full flex items-center justify-center"
    :style="{ backgroundColor: color }"
  ></div>
</template>

<script setup lang="ts">
interface IProps {
  color: string;
}

defineProps<IProps>();
</script>

<style scoped></style>
