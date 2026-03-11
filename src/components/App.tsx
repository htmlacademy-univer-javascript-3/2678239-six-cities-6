import MainPage from '../pages/MainPage.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute} from '../const.ts';
import PageNotFound from '../pages/PageNotFound.tsx';
import FavoritesPage from '../pages/FavoritesPage.tsx';
import LoginPage from '../pages/LoginPage.tsx';
import OfferPage from '../pages/OfferPage.tsx';

type AppProps = {
  placesCount: number;
}

export default function App({placesCount}: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainPage placesCount={placesCount}/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={<FavoritesPage/>}
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
