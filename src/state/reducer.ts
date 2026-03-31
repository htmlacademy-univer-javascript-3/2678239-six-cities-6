import {createReducer} from '@reduxjs/toolkit';
import {Offer} from '../types/offer.ts';
import {selectOffer, setCity, setOffers, setSort} from './action.ts';
import {offers} from '../mocks/offers.ts';
import {SortTypes} from '../types/sort.ts';

type AppState = {
  city: string;
  offers: Offer[];
  selectedOffer: Offer | null;
  sortType: SortTypes;
}

const initialState: AppState = {
  city: 'Paris',
  offers,
  selectedOffer: null,
  sortType: SortTypes.Popular,
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
    });
});
