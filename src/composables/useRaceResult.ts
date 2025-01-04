import type { IHorse } from '@/common/interfaces/horse.interface';
import type { IResult } from '@/common/interfaces/result.interface';
import type { ISchedule } from '@/common/interfaces/schedule.interface';
import { useRacingBoardStore } from '@/stores/racingBoard';

export const useRaceResult = () => {
  const racingBoardStore = useRacingBoardStore();

  const startRace = (raceSchedule: ISchedule[]) => {
    racingBoardStore.clearRaceState();
    racingBoardStore.setRaceStarted(true);
    racingBoardStore.clearResults();
    racingBoardStore.setCurrentRound(0);
    animateRace(raceSchedule);
  };

  const animateRace = (raceSchedule: ISchedule[]) => {
    if (racingBoardStore.currentRound >= raceSchedule.length) {
      racingBoardStore.setRaceEnded(true);
      return;
    }

    const round = raceSchedule[racingBoardStore.currentRound];
    const roundResults: IResult[] = [];

    round.horses.forEach((horse) => {
      racingBoardStore.updateHorsePosition(horse.id, 0);
    });

    const interval = setInterval(() => {
      round.horses.forEach((horse) => {
        const currentDistance = racingBoardStore.activeRoundHorses[horse.id] || 0;
        const speed = (horse.speed / 100) * 15;
        racingBoardStore.updateHorsePosition(horse.id, currentDistance + speed);
      });

      const allHorsesFinished = round.horses.every(
        (horse) => (racingBoardStore.activeRoundHorses[horse.id] || 0) >= 100,
      );

      if (allHorsesFinished) {
        clearInterval(interval);

        const sortedHorses = [...round.horses].sort(
          (a, b) =>
            (racingBoardStore.activeRoundHorses[b.id] || 0) -
            (racingBoardStore.activeRoundHorses[a.id] || 0),
        );

        sortedHorses.forEach((horse, index) => {
          roundResults.push({
            round: racingBoardStore.currentRound + 1,
            horse,
            position: index + 1,
          });
        });

        racingBoardStore.addResults(roundResults);

        setTimeout(() => {
          racingBoardStore.setCurrentRound(racingBoardStore.currentRound + 1);
          if (racingBoardStore.currentRound < raceSchedule.length) {
            animateRace(raceSchedule);
          } else {
            racingBoardStore.setRaceEnded(true);
          }
        }, 2000);
      }
    }, 30);
  };

  const getHorsePosition = (horse: IHorse, roundIndex: number): string => {
    if (roundIndex !== racingBoardStore.currentRound) {
      return '0%';
    }
    return `${racingBoardStore.activeRoundHorses[horse.id] || 0}%`;
  };

  return {
    startRace,
    getHorsePosition,
  };
};
