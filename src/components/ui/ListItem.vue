<template>
  <li
    :class="{
      'group state-effect': isElmStateEffectEnable,
    }"
    class="border-solid border border-r-stroke"
  >
    <slot></slot>
  </li>
</template>

<script lang="ts" setup>
interface IProps {
  isElmStateEffectEnable?: boolean;
}

withDefaults(defineProps<IProps>(), { isElmStateEffectEnable: true });
</script>

<style scoped lang="scss">
li {
  @apply grid items-center gap-2 px-12 py-6 text-sm border rounded-lg cursor-pointer text-r-black border-r-stroke text-start transition-colors duration-200;
}

.state-effect {
  &:hover {
    @apply border-r-primary text-r-primary;
  }

  &:active {
    @apply bg-r-primary/5 border-r-primary text-r-primary;
  }
}
</style>
