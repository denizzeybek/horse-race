<template>
  <template v-for="(round, index) in racingBoardStore.raceScheduleList" :key="index">
    <div
      v-if="index === racingBoardStore.currentRound"
      class="border border-gray-300 rounded-lg overflow-hidden bg-green-300 p-4"
    >
      <div class="p-2 bg-gray-100 border-b border-gray-300 font-bold">
        Round {{ index + 1 }} - {{ round.distance }}m
      </div>
      <div  class="!border-r-8 border-t-0 border-b-0 border-l-0 border-solid border-red-600">
        <div
          v-for="(horse, idx) in round.horses"
          :key="horse.id"
          id="hippodrome"
          class="h-12 border-b border-l-0 border-top-0 border-solid border-gray-200 relative"
        >
          <div
            class="bg-r-white px-2 rounded-md left-0 h-12 w-12 flex items-center justify-center absolute top-1/2 -translate-y-1/2"
          >
            {{ idx + 1 }}
          </div>
          <div
            class="absolute flex items-center gap-2 h-full px-1.5 transition-transform duration-[30ms] ease-linear left-[60px]"
            :style="getHorsePositionStyle(horse, index)"
          >
            <div
              class="h-12 w-12 rounded-full flex items-center justify-center"
              :style="{ backgroundColor: horse.color }"
            >
              <div class="-scale-x-[1]">🏇</div>
            </div>
            <span class="text-sm whitespace-nowrap">{{ horse.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </template>
</template>

<script lang="ts" setup>
import { useRaceResult } from '@/composables/useRaceResult';
import { useRacingBoardStore } from '@/stores/racingBoard';
import { onMounted } from 'vue';

const racingBoardStore = useRacingBoardStore();

const { getHorsePositionStyle } = useRaceResult();

onMounted(() => {
  racingBoardStore.setHorseList();
});
</script>
