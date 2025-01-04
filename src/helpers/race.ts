import type { IHorse } from '@/common/interfaces/horse.interface';
import type { IRound } from '@/common/interfaces/round.interface';

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

const horseColors = [
  'Red',
  'Blue',
  'Green',
  'Yellow',
  'Black',
  'White',
  'Brown',
  'Gray',
  'Pink',
  'Purple',
  'Orange',
  'Cyan',
  'Magenta',
  'Lime',
  'Teal',
  'Indigo',
  'Violet',
  'Gold',
  'Silver',
  'Copper',
  'Bronze',
  'Beige',
  'Lavender',
  'Maroon',
  'Olive',
  'Turquoise',
  'Coral',
  'Salmon',
  'Peach',
  'Mint',
  'Champagne',
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

export const generateHorseColor = (availableColors: string[]) => {
  return availableColors[Math.floor(Math.random() * availableColors.length)];
};

export const generateHorseSpeed = () => {
  return Math.floor(Math.random() * 100) + 1;
};

export const generateHorseList = () => {
  const horseList: IHorse[] = [];
  const remainingColors = [...horseColors];

  for (let i = 0; i < 20; i++) {
    const color = generateHorseColor(remainingColors);
    const colorIndex = remainingColors.indexOf(color);
    if (colorIndex > -1) {
      remainingColors.splice(colorIndex, 1);
    }

    horseList.push({
      id: i + 1,
      name: generateHorseName(),
      color: color,
      speed: generateHorseSpeed(),
    });
  }
  return horseList as IHorse[];
};

export const generateRaceRounds = (horseArray: IHorse[]) => {
  const rounds: IRound[] = [];
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
