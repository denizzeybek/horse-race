import type { IHorse } from './horse.interface';

export interface IResult {
  round?: number;
  horse: IHorse;
  position: number;
}
