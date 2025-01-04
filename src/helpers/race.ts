import type { IHorse } from '@/common/interfaces/horse.interface';

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
