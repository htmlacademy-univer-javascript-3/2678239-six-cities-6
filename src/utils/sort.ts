import {Offer} from '../types/offer.ts';
import {SortTypes} from '../types/sort.ts';

export function sortOffers(offers: Offer[], sortType: SortTypes) {
  switch (sortType) {
    case SortTypes.Popular:
      return offers;
    case SortTypes.PriceHighToLow:
      return offers.toSorted((a, b) => b.price - a.price);
    case SortTypes.PriceLowToHigh:
      return offers.toSorted((a, b) => a.price - b.price);
    case SortTypes.TopRated:
      return offers.toSorted((a, b) => b.rating - a.rating);
  }
}
