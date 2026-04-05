import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offer.ts';
import {SortTypes} from '../types/sort.ts';
import {AuthorizationStatus, User} from '../types/app.ts';

export const setCity = createAction<string>('setCity');

export const setOffers = createAction<Offer[]>('setOffers');

export const selectOffer = createAction<Offer | null>('selectOffer');

export const setSort = createAction<SortTypes>('setSort');

export const setOffersLoadingStatus = createAction<boolean>('setOffersLoadingStatus');

export const setAuthorizationStatus = createAction<AuthorizationStatus>('setAuthorizationStatus');

export const setUser = createAction<User>('setUser');
