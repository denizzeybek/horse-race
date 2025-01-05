import type { IHorse } from './horse.interface';

export interface ISchedule {
  round?: number;
  distance: number;
  horses: IHorse[];
  isCompleted?: boolean;
}
