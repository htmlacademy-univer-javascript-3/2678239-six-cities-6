import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offer.ts';
import {SortTypes} from '../types/sort.ts';

export const setCity = createAction<string>('setCity');

export const setOffers = createAction<Offer[]>('setOffers');

export const selectOffer = createAction<Offer>('selectOffer');

export const setSort = createAction<SortTypes>('setSort');
