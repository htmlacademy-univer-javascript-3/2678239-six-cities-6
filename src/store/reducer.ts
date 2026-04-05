import {createReducer} from '@reduxjs/toolkit';
import {Offer} from '../types/offer.ts';
import {
  selectOffer,
  setAuthorizationStatus,
  setCity,
  setOffers,
  setOffersLoadingStatus,
  setSort,
  setUser
} from './action.ts';
import {SortTypes} from '../types/sort.ts';
import {AuthorizationStatus, User} from '../types/app.ts';

type AppState = {
  city: string;
  offers: Offer[];
  selectedOffer: Offer | null;
  sortType: SortTypes;
  isOffersLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  user: User | null
}

const initialState: AppState = {
  city: 'Paris',
  offers: [],
  selectedOffer: null,
  sortType: SortTypes.Popular,
  isOffersLoading: true,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
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
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    });
});
