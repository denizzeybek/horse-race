import { defineStore } from 'pinia';
import { EStoreNames } from '@/stores/storeNames';
import type { IHorse } from '@/common/interfaces/horse.interface';
import { generateHorseList } from '@/helpers/race';


interface State {
  horseList: IHorse[];
}

export const useRacingBoardStore = defineStore(EStoreNames.RACING_BOARD, {
  state: (): State => ({
    horseList: [],
  }),
  actions: {
    setHorseList() {
      this.horseList = generateHorseList() as IHorse[];
    },
  },
});
