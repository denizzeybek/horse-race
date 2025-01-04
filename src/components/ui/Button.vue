<template>
  <button
    :type="buttonType"
    :class="[variant, className]"
    :data-selected="isSelected"
    :disabled="isDisabledOrLoading"
    @click="emitClickEvent"
  >
    <RSpinner v-if="isLoading" size="small" />
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import type { HTMLAttributes } from 'vue';
import { computed } from 'vue';

// Interface for Props
export interface ButtonProps {
  buttonType?: 'button' | 'submit' | 'reset';
  isDisabled?: boolean;
  isLoading?: boolean;
  variant?: 'primary' | 'danger' | 'light' | 'select' | 'outlined-primary' | 'link';
  isSelected?: boolean;
  className?: HTMLAttributes['class'];
}

// Default Prop Values
const props = withDefaults(defineProps<ButtonProps>(), {
  buttonType: 'button',
  isDisabled: false,
  isLoading: false,
  variant: 'primary',
});

// Emits
const emit = defineEmits(['click']);

// Computed Properties
const isDisabledOrLoading = computed(() => props.isDisabled || props.isLoading);

// Methods
const emitClickEvent = (event: Event) => {
  emit('click', event);
};
</script>

<style scoped lang="scss">
button {
  @apply font-semibold cursor-pointer rounded-lg text-sm px-4 py-3 whitespace-nowrap ml-0 flex justify-center items-center gap-1.5;
}

button:disabled {
  @apply cursor-not-allowed pointer-events-none select-none;
}

button.primary {
  @apply bg-r-primary hover:bg-r-primary-hovered text-r-white;
}

button.primary:active {
  @apply ring-4 ring-r-primary ring-opacity-40;
}

button.primary:disabled {
  @apply bg-r-primary bg-opacity-40;
}

button.outlined-primary {
  @apply border-r-primary border text-r-primary bg-transparent hover:bg-r-primary-10;
}

button.outlined-primary:active {
  @apply ring-2 ring-r-primary;
}

button.outlined-primary:disabled {
  @apply border-r-primary bg-transparent text-r-primary opacity-40;
}

button.outlined-secondary {
  @apply border-r-secondary border text-r-secondary bg-transparent hover:bg-r-primary/15;
}

button.outlined-secondary:active {
  @apply ring-2 ring-r-secondary;
}

button.outlined-secondary:disabled {
  @apply border-r-secondary bg-transparent text-r-secondary opacity-40;
}

button.select {
  @apply text-r-black bg-white border border-r-stroke   py-[11px];
}

button.select:hover {
  @apply border-r-primary text-r-primary;
}

button.select:active,
button.select[data-selected='true'] {
  @apply bg-r-primary bg-opacity-10 border-r-primary text-r-primary;
}

button.select:disabled {
  @apply bg-white opacity-50 border-r-stroke text-r-black;
}

button.link {
  @apply bg-transparent text-r-primary font-bold underline;
}
</style>
