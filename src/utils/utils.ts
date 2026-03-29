import {Offer} from '../types/offer.ts';

export function findItemById<T extends { id: string }>(array: T[], id: string): T | undefined {
  return array.find((el) => el.id === id);
}

export function filterOffersByCity(offers: Offer[], city: string) {
  return offers.filter((offer: Offer) => offer.city.name === city);
}
