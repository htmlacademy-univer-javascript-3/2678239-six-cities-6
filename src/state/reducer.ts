import { createReducer } from '@reduxjs/toolkit';
import {Offer} from '../types/offer.ts';
import {selectOffer, setCity, setOffers} from './action.ts';
import {offers} from '../mocks/offers.ts';

type AppState = {
  city: string;
  offers: Offer[];
  selectedOffer: Offer | null;
}

const initialState: AppState = {
  city: 'Paris',
  offers,
  selectedOffer: null,
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
    });
});
