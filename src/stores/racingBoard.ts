import { EStoreNames } from '@/common/enums/storeNames';
import type { IHorse } from '@/common/interfaces/horse.interface';
import type { IResult } from '@/common/interfaces/result.interface';
import type { ISchedule } from '@/common/interfaces/schedule.interface';
import { generateHorseList, generateRaceSchedule } from '@/helpers/race';
import { defineStore } from 'pinia';

interface State {
  horseList: IHorse[];
  raceScheduleList: ISchedule[];
  raceResults: IResult[];
  isScheduleGenerated: boolean;
  isRaceStarted: boolean;
  isRaceEnded: boolean;
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
    isRaceEnded: false,
    currentRound: 0,
    activeRoundHorses: {},
  }),
  persist: true, // Tüm state'leri persist et
  getters: {
    groupedResults: (state) => {
      const grouped = state.raceResults.reduce(
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

      return Object.values(grouped);
    },
    getRoundWinners: (state) => {
      return state.raceResults.filter((result) => result.position === 1);
    },
  },
  actions: {
    setHorseList() {
      this.horseList = generateHorseList() as IHorse[];
    },
    setRaceSchedule() {
      this.clearAll();
      this.raceScheduleList = generateRaceSchedule(this.horseList);
    },
    clearResults() {
      this.raceResults = [];
      this.isRaceEnded = false;
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
      this.setCurrentRound(0);
    },
    setRaceStarted(value: boolean) {
      this.isRaceStarted = value;
    },
    setCurrentRound(value: number) {
      this.currentRound = value;
    },
    updateHorsePosition(horseId: string, position: number) {
      this.activeRoundHorses[horseId] = position;
    },
    setRaceEnded(value: boolean) {
      this.isRaceEnded = value;
    },
    clearRaceState() {
      this.clearResults();
      this.isRaceStarted = false;
      this.currentRound = 0;
      this.activeRoundHorses = {};
    },
    clearAll() {
      this.raceScheduleList = [];
      this.raceResults = [];
      this.isScheduleGenerated = false;
      this.isRaceStarted = false;
      this.isRaceEnded = false;
      this.currentRound = 0;
      this.activeRoundHorses = {};
    },
    resetRace() {
      this.clearAll();
      this.setHorseList();
    },
  },
});
