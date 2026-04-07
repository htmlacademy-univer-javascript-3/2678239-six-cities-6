import {createAsyncThunk} from '@reduxjs/toolkit';
import {APIRoute, AppDispatch, AuthorizationStatus, State} from '../types/app.ts';
import {AxiosInstance} from 'axios';
import {Offer} from '../types/offer.ts';
import {setAuthorizationStatus, setOffers, setOffersLoadingStatus, setUser} from './action.ts';
import {AuthRequest, AuthInfo} from '../types/api.ts';
import {saveToken} from '../services/token.ts';

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

function saveUser(dispatch: AppDispatch, authInfo: AuthInfo) {
  const { token, ...user } = authInfo;
  saveToken(token);
  dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
  dispatch(setUser(user));
}

export const getAuthorizationStatusAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'getAuthorizationStatus',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<AuthInfo>(APIRoute.Login);
      saveUser(dispatch, data);
    } catch { /* empty */ }
  },
);

export const authorizeAction = createAsyncThunk<void, AuthRequest, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'authorize',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<AuthInfo>(APIRoute.Login, _arg);
      saveUser(dispatch, data);
    } catch { /* empty */ }
  },
);
