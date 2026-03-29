import {Navigate} from 'react-router-dom';
import React from 'react';
import {AppRoute, AuthorizationStatus} from '../types/app.ts';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: React.JSX.Element;
}

export default function PrivateRoute(props: PrivateRouteProps): React.JSX.Element {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}
