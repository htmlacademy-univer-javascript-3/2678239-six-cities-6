import dayjs from 'dayjs';
import {Offer} from './types/offer.ts';

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
