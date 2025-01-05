import type { IHorse } from '@/common/interfaces/horse.interface';
import type { IResult } from '@/common/interfaces/result.interface';
import type { ISchedule } from '@/common/interfaces/schedule.interface';
import { useRacingBoardStore } from '@/stores/racingBoard';
import { useRToast } from '@/composables/useRToast';

export const useRaceResult = () => {
  const racingBoardStore = useRacingBoardStore();
  const { showSuccessMessage } = useRToast();

  const startRace = async (raceSchedule: ISchedule[]) => {
    racingBoardStore.clearRaceState();
    racingBoardStore.setRaceStarted(true);
    racingBoardStore.clearResults();
    racingBoardStore.setCurrentRound(0);

    animateRace(raceSchedule);
  };

  const getHorsePositionStyle = (horse: IHorse, roundIndex: number) => {
    return {
      transform: `translateX(${getHorsePosition(horse, roundIndex)})`,
    };
  };

  const animateRace = (raceSchedule: ISchedule[]) => {
    if (racingBoardStore.currentRound >= raceSchedule.length) {
      racingBoardStore.setRaceEnded(true);
      return;
    }

    const round = raceSchedule[racingBoardStore.currentRound];
    const roundResults: IResult[] = [];

    round.horses.forEach((horse) => {
      // atları başlngıç pozisyonuna getir
      racingBoardStore.updateHorsePosition(horse.id, 0);
    });

    const hippodromeWidth =
      document.getElementById('hippodrome')?.getBoundingClientRect().width ?? window.innerWidth;
    const labelWidth = 64;
    const riderWidth = 48;

    const raceWidth = hippodromeWidth - labelWidth - riderWidth;

    const interval = setInterval(() => {
      round.horses.forEach((horse) => {
        const currentDistance = racingBoardStore.activeRoundHorses[horse.id] || 0;

        const speed = horse.speed;

        racingBoardStore.updateHorsePosition(horse.id, currentDistance + speed + 400);
      });

      const allHorsesFinished = round.horses.every((horse) => {
        return (racingBoardStore.activeRoundHorses[horse.id] || 0) >= raceWidth;
      });

      if (allHorsesFinished) {
        // Yarış turu bittiğinde interval'i temizle
        clearInterval(interval);

        // Atları bitiş çizgisindeki pozisyonlarına göre sırala
        // activeRoundHorses'daki değer ne kadar büyükse o kadar ileri gitmiş demektir
        const sortedHorses = [...round.horses].sort(
          (a, b) =>
            (racingBoardStore.activeRoundHorses[b.id] || 0) -
            (racingBoardStore.activeRoundHorses[a.id] || 0),
        );

        // Sıralanan atları dereceleriyle birlikte sonuçlara ekle
        // İlk sıradaki at 1., ikinci 2. vs şeklinde
        sortedHorses.forEach((horse, index) => {
          roundResults.push({
            round: racingBoardStore.currentRound + 1, // Tur numarası
            horse, // Yarışan at
            position: index + 1, // Yarıştaki sırası/derecesi
          });
        });

        racingBoardStore.addResults(roundResults);

        setTimeout(() => {
          racingBoardStore.setCurrentRound(racingBoardStore.currentRound + 1);
          if (racingBoardStore.currentRound < raceSchedule.length) {
            animateRace(raceSchedule);
          } else {
            racingBoardStore.setRaceEnded(true);
            showSuccessMessage('Race finished');
          }
        }, 1000);
      }
    }, 30);
  };

  const getHorsePosition = (horse: IHorse, roundIndex: number): string => {
    if (roundIndex !== racingBoardStore.currentRound) {
      return '0px';
    }
    return `${racingBoardStore.activeRoundHorses[horse.id] || 0}px`;
  };

  return {
    startRace,
    getHorsePosition,
    getHorsePositionStyle,
  };
};
