import type { IHorse } from "./horse.interface";

export interface IRound {
  round: number;
  distance: number;
  horses: IHorse[];
}
