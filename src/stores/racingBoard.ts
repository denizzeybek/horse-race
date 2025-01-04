import { defineStore } from 'pinia';
import { EStoreNames } from '@/stores/storeNames';
import { generateHorseList, generateRaceSchedule } from '@/helpers/race';
import type { IHorse } from '@/common/interfaces/horse.interface';
import type { ISchedule } from '@/common/interfaces/schedule.interface';


interface State {
  horseList: IHorse[];
  raceScheduleList: ISchedule[];
}

export const useRacingBoardStore = defineStore(EStoreNames.RACING_BOARD, {
  state: (): State => ({
    horseList: [],
    raceScheduleList: [],
  }),
  actions: {
    setInitialData() {
      this.horseList = generateHorseList() as IHorse[];
    },
    setRaceSchedule() {
      this.raceScheduleList = generateRaceSchedule(this.horseList);
    },
  },
});
