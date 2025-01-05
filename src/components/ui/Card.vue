<template>
  <div class="py-4 px-4 bg-r-white rounded-md flex flex-col gap-2">
    <div class="flex justify-center py-3 rounded-md" :class="[variant]">
      <RText as="p" className="!text-r-white">{{ title }}</RText>
    </div>
    <div class="overflow-y-auto lg:max-h-[490px]">
      <slot name="body" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  title: string;
  variant?: 'primary' | 'secondary';
}

withDefaults(defineProps<IProps>(), {
  variant: 'primary',
});
</script>

<style scoped lang="scss">
.primary {
  @apply bg-r-primary text-r-white;
}

.secondary {
  @apply bg-r-secondary text-r-white;
}
</style>
