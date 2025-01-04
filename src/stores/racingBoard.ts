import { defineStore } from 'pinia';
import { EStoreNames } from '@/stores/storeNames';
import { generateHorseList, generateRaceRounds } from '@/helpers/race';
import type { IHorse } from '@/common/interfaces/horse.interface';
import type { IRound } from '@/common/interfaces/round.interface';


interface State {
  horseList: IHorse[];
  roundList: IRound[];
}

export const useRacingBoardStore = defineStore(EStoreNames.RACING_BOARD, {
  state: (): State => ({
    horseList: [],
    roundList: [],
  }),
  actions: {
    setInitialData() {
      this.horseList = generateHorseList() as IHorse[];
      this.roundList = generateRaceRounds(this.horseList);
    },
  },
});
