import {createAsyncThunk} from '@reduxjs/toolkit';
import {APIRoute, AppDispatch, State} from '../types/app.ts';
import {AxiosInstance} from 'axios';
import {Offer} from '../types/offer.ts';
import {setOffers, setOffersLoadingStatus} from './action.ts';

export const loadOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'loadOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersLoadingStatus(true));
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(setOffersLoadingStatus(false));
    dispatch(setOffers(data));
  },
);
