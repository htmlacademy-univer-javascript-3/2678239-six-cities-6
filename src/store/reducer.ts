import {createReducer} from '@reduxjs/toolkit';
import {Offer} from '../types/offer.ts';
import {selectOffer, setCity, setOffers, setOffersLoadingStatus, setSort} from './action.ts';
import {SortTypes} from '../types/sort.ts';

type AppState = {
  city: string;
  offers: Offer[];
  selectedOffer: Offer | null;
  sortType: SortTypes;
  isOffersLoading: boolean;
}

const initialState: AppState = {
  city: 'Paris',
  offers: [],
  selectedOffer: null,
  sortType: SortTypes.Popular,
  isOffersLoading: true,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(selectOffer, (state, action) => {
      state.selectedOffer = action.payload;
    })
    .addCase(setSort, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.isOffersLoading = action.payload;
    });
});
