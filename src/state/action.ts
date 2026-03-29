import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offer.ts';

export const setCity = createAction<string>('setCity');

export const setOffers = createAction<Offer[]>('setOffers');

export const selectOffer = createAction<Offer>('selectOffer');
