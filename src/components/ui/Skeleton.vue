<template>
  <div class="flex flex-col gap-4">
    <div
      v-for="i in rows"
      :key="i"
      class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto"
    >
      <div class="animate-pulse flex space-x-4">
        <div class="flex-1 space-y-6 py-1">
          <div class="space-y-3">
            <div class="grid grid-cols-3 gap-4">
              <div
                v-for="i in columns"
                :key="i"
                class="h-2.5 bg-gray-400 rounded col-span-1"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface IProps {
  columns?: number;
  rows?: number;
}

withDefaults(defineProps<IProps>(), {
  columns: 3,
  rows: 8
});
</script>