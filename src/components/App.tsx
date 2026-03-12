import MainPage from '../pages/MainPage.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../const.ts';
import PageNotFound from '../pages/PageNotFound.tsx';
import FavoritesPage from '../pages/FavoritesPage.tsx';
import LoginPage from '../pages/LoginPage.tsx';
import OfferPage from '../pages/OfferPage.tsx';
import PrivateRoute from './PrivateRoute.tsx';
import {Offer} from '../types/offer.ts';
import FavoritesEmptyPage from '../pages/FavoritesEmptyPage.tsx';

type AppProps = {
  placesCount: number;
  offers: Offer[];
}

export default function App({placesCount, offers}: AppProps) {
  const favoriteOffers = offers.filter((o) => o.isFavorite);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainPage placesCount={placesCount} offers={offers}/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              {favoriteOffers.length > 0
                ? <FavoritesPage favouriteOffers={favoriteOffers}/>
                : <FavoritesEmptyPage/>}
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage/>}
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferPage/>}
        />
        <Route
          path={'*'}
          element={<PageNotFound/>}
        />
      </Routes>
    </BrowserRouter>
  );
}
