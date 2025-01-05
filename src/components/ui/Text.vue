<template>
  <component :is="tag" :class="classes">
    <span v-if="innerText" v-html="innerText" />
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { computed } from 'vue';

interface IProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'info' | 'ps';
  className?: HTMLAttributes['class'];
  innerText?: any;
}
const props = withDefaults(defineProps<IProps>(), {
  as: 'p',
});

const tag = computed(() => (['info', 'ps'].includes(props.as) ? 'p' : props.as));
const classes = computed(() => {
  const cls = [props.className];
  switch (props.as) {
    case 'info':
      cls.unshift('info');
      break;
    case 'ps':
      cls.unshift('ps');
      break;
  }
  return cls;
});
</script>

<style scoped lang="scss">
h1,
h2,
h3,
h4,
h5,
h6,
p,
a {
  @apply text-r-black;
}

h1 {
  @apply text-4xl font-semibold;
}

h2 {
  @apply text-xl font-semibold;
}

h3 {
  @apply text-xl font-normal;
}

h4 {
  @apply text-base font-semibold;
}

h5 {
  @apply text-base font-normal;
}

h6 {
  @apply text-sm font-semibold;
}

p {
  @apply text-sm font-normal;
}

p.info {
  @apply text-r-secondary;
}

p.ps {
  @apply text-xs text-r-primary italic;
}
</style>
