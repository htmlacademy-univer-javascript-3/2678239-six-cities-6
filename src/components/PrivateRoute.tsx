import {Navigate} from 'react-router-dom';
import React from 'react';
import {AppRoute, AuthorizationStatus} from '../types/app.ts';
import {useAppSelector} from '../hooks/store.ts';

type PrivateRouteProps = {
  children: React.JSX.Element;
}

export default function PrivateRoute({children}: PrivateRouteProps): React.JSX.Element {
  const authorizationStatus = useAppSelector((store) => store.authorizationStatus);
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}
