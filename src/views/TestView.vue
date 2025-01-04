<template>
  <div>
    <div class="p-5">
        <div
        v-for="(round, index) in racingBoardStore.raceScheduleList"
        :key="index"
        class="mb-5 border border-gray-300 rounded-lg overflow-hidden"
        >
        <template v-if="index === racingBoardStore.currentRound">
          <div class="p-2 bg-gray-100 border-b border-gray-300 font-bold">
            Round {{ index + 1 }} - {{ round.distance }}m
          </div>
          <div class="p-2.5">
            <div
              v-for="(horse, idx) in round.horses"
              :key="horse.id"
              class="h-12 border-b border-dashed border-gray-200 relative last:border-b-0"
            >
              <div
                class="bg-r-white px-2 rounded-md left-0 h-12 w-12 flex items-center justify-center absolute top-1/2 -translate-y-1/2"
              >
                {{ idx + 1 }}
              </div>
              <div
                class="absolute flex items-center gap-2 h-full px-1.5"
                style="left: 60px"
                :style="getHorsePositionStyle(horse, index)"
              >
                <div
                  class="h-12 w-12 rounded-full flex items-center justify-center"
                  :style="{ backgroundColor: horse.color }"
                >
                  <div class="transform rotate-90">🏇</div>
                </div>
                <span class="text-sm whitespace-nowrap">{{ horse.name }}</span>
              </div>
            </div>
          </div>
        </template>
        </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IHorse } from '@/common/interfaces/horse.interface';
import { useRaceResult } from '@/composables/useRaceResult';
import { useRacingBoardStore } from '@/stores/racingBoard';
import { onMounted } from 'vue';

const racingBoardStore = useRacingBoardStore();
const { getHorsePosition } = useRaceResult();

const getHorsePositionStyle = (horse: IHorse, roundIndex: number) => {
  return {
    transform: `translateX(${getHorsePosition(horse, roundIndex)})`,
    transition: 'transform 0.03s linear',
  };
};

onMounted(() => {
  racingBoardStore.setInitialData();
});
</script>
