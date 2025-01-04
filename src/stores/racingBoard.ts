import type { IHorse } from '@/common/interfaces/horse.interface';
import type { IResult } from '@/common/interfaces/result.interface';
import type { ISchedule } from '@/common/interfaces/schedule.interface';
import { generateHorseList, generateRaceSchedule } from '@/helpers/race';
import { EStoreNames } from '@/stores/storeNames';
import { defineStore } from 'pinia';

interface State {
  horseList: IHorse[];
  raceScheduleList: ISchedule[];
  raceResults: IResult[];
  isScheduleGenerated: boolean;
  isRaceStarted: boolean;
  currentRound: number;
  activeRoundHorses: { [key: string]: number };
}

export const useRacingBoardStore = defineStore(EStoreNames.RACING_BOARD, {
  state: (): State => ({
    horseList: [],
    raceScheduleList: [],
    raceResults: [],
    isScheduleGenerated: false,
    isRaceStarted: false,
    currentRound: 0,
    activeRoundHorses: {},
  }),
  getters: {
    groupedResults: (
      state,
    ): { [key: number]: { round: number; distance: number; results: IResult[] } } => {
      return state.raceResults.reduce(
        (acc, result) => {
          const round: number = result.round!;
          if (!acc[round]) {
            // Find the schedule for this round to get the distance
            const schedule = state.raceScheduleList.find((s) => s.round === round);
            acc[round] = {
              round: schedule?.round || 0,
              distance: schedule?.distance || 0,
              results: [],
            };
          }
          acc[round].results.push(result);
          return acc;
        },
        {} as { [key: number]: { round: number; distance: number; results: IResult[] } },
      );
    },
  },
  actions: {
    setInitialData() {
      this.horseList = generateHorseList() as IHorse[];
    },
    setRaceSchedule() {
      this.clearResults();
      this.raceScheduleList = generateRaceSchedule(this.horseList);
    },
    clearResults() {
      this.raceResults = [];
    },
    addResults(results: IResult[]) {
      const round = results[0]?.round;
      if (round) {
        // Eğer bu round için sonuçlar zaten varsa, onları kaldır
        this.raceResults = this.raceResults.filter((result) => result.round !== round);
        // Yeni sonuçları ekle
        this.raceResults.push(...results);
      }
    },
    setScheduleGenerated(value: boolean) {
      this.isScheduleGenerated = value;
    },
    setRaceStarted(value: boolean) {
      this.isRaceStarted = value;
    },
    setCurrentRound(value: number) {
      this.currentRound = value;
    },
    setActiveRoundHorses(horses: { [key: string]: number }) {
      this.activeRoundHorses = horses;
    },
    updateHorsePosition(horseId: string, position: number) {
      this.activeRoundHorses[horseId] = position;
    },
  },
});
