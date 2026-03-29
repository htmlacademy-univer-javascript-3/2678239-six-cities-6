import {SortTypes} from './types/sort.ts';

export const MAX_NEIGHBOUR_POINTS = 3;

export const SortTypeNames = new Map<SortTypes, string> ([
  [SortTypes.Popular, 'Popular'],
  [SortTypes.PriceLowToHigh, 'Price: low to high'],
  [SortTypes.PriceHighToLow, 'Price: high to low'],
  [SortTypes.TopRated, 'Top rated first']
]);

export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';
