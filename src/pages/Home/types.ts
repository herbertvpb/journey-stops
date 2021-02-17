export enum TimeType {
  YEAR = 'year',
  MONTH = 'month',
  WEEK = 'week',
  DAY = 'day',
}

export interface ISpaceship {
  MGLT: number;
  cargo_capacity: number;
  consumables: string;
  cost_in_credits: number;
  created: string;
  crew: string;
  edited: string;
  hyperdrive_rating: string;
  length: number;
  manufacturer: string;
  max_atmosphering_speed: number;
  model: string;
  name: string;
  passengers: number;
  starship_class: string;
  url: string;
  stops?: string;
}
