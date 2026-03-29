export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  Root = '/',
}

import {SortTypes} from './types/sort.ts';

export const MAX_NEIGHBOUR_POINTS = 3;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const SortTypeNames = new Map<SortTypes, string> ([
  [SortTypes.Popular, 'Popular'],
  [SortTypes.PriceLowToHigh, 'Price: low to high'],
  [SortTypes.PriceHighToLow, 'Price: high to low'],
  [SortTypes.TopRated, 'Top rated first']
]);

export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';
