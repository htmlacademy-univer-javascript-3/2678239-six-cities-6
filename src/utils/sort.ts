import {Offer} from '../types/offer.ts';
import {SortTypes} from '../types/sort.ts';

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
