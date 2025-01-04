import type { IHorse } from '@/common/interfaces/horse.interface';
import type { ISchedule } from '@/common/interfaces/schedule.interface';
import { v4 as uuidv4 } from 'uuid';

const horseNames = [
  'Thunder',
  'Lightning',
  'Storm',
  'Blaze',
  'Shadow',
  'Spirit',
  'Arrow',
  'Comet',
  'Wind',
  'Flame',
];

const distanceArray = [1200, 1400, 1600, 1800, 2000, 2200];

export const generateHorseName = () => {
  const firstName = horseNames[Math.floor(Math.random() * horseNames.length)];
  let lastName = horseNames[Math.floor(Math.random() * horseNames.length)];

  if (firstName === lastName) {
    lastName = horseNames.find((name) => name !== firstName) ?? '';
  }

  return `${firstName} ${lastName}`;
};

export const generateHorseColor = () => {
  const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

export const generateHorseSpeed = () => {
  return Math.floor(Math.random() * 100) + 1;
};

export const generateHorseList = () => {
  const horseList: IHorse[] = [];

  for (let i = 0; i < 20; i++) {
    const color = generateHorseColor();
    

    horseList.push({
      id: uuidv4(),
      name: generateHorseName(),
      color: color,
      speed: generateHorseSpeed(),
    });
  }
  return horseList as IHorse[];
};

export const generateRaceSchedule = (horseArray: IHorse[]) => {
  const rounds: ISchedule[] = [];
  const horsesCopy = [...horseArray];

  for (let i = 0; i < distanceArray.length; i++) {
    const roundHorses: IHorse[] = [];
    const remainingHorses = horsesCopy.slice();

    // 10 at seç
    for (let j = 0; j < 10; j++) {
      const randomIndex = Math.floor(Math.random() * remainingHorses.length);
      roundHorses.push(remainingHorses[randomIndex]);
      remainingHorses.splice(randomIndex, 1);
    }

    rounds.push({
      round: i + 1,
      distance: distanceArray[i],
      horses: roundHorses,
    });
  }

  return rounds;
}
