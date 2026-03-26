import { createReducer } from '@reduxjs/toolkit';
import {Offer} from '../types/offer.ts';
import {setCity, setOffers} from './action.ts';

type AppState = {
  city: string;
  offers: Offer[];
}

const initialState: AppState = {
  city: 'Paris',
  offers: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});
