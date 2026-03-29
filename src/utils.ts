import dayjs from 'dayjs';
import {Offer} from './types/offer.ts';
import {SortTypes} from './types/sort.ts';

export function findItemById<T extends { id: string }>(array: T[], id: string): T | undefined {
  return array.find((el) => el.id === id);
}

export function humanizeDateDay(date: string) {
  return date ? dayjs(date).format('YYYY-MM-DD') : '';
}

export function humanizeDateMonth(date: string) {
  return date ? dayjs(date).format('MMMM YYYY') : '';
}

export function filterOffersByCity(offers: Offer[], city: string) {
  return offers.filter((offer: Offer) => offer.city.name === city);
}

export function sortOffers(offers: Offer[], sortType: SortTypes) {
  const offersCopy = [...offers];
  switch (sortType) {
    case SortTypes.Popular:
      return offers;
    case SortTypes.PriceHighToLow:
      return offersCopy.sort((a, b) => b.price - a.price);
    case SortTypes.PriceLowToHigh:
      return offersCopy.sort((a, b) => a.price - b.price);
    case SortTypes.TopRated:
      return offersCopy.sort((a, b) => b.rating - a.rating);
  }
}
