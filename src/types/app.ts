import {store} from '../store';
import {AuthInfo} from './api.ts';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  Root = '/',
}

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export type User = Omit<AuthInfo, 'token'>;
