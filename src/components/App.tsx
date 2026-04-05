import MainPage from '../pages/MainPage.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PageNotFound from '../pages/PageNotFound.tsx';
import FavoritesPage from '../pages/FavoritesPage.tsx';
import LoginPage from '../pages/LoginPage.tsx';
import OfferPage from '../pages/OfferPage.tsx';
import PrivateRoute from './PrivateRoute.tsx';
import {AppRoute} from '../types/app.ts';
import {comments} from '../mocks/comments.ts';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainPage/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage/>}
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferPage comments={comments}/>}
        />
        <Route
          path={'*'}
          element={<PageNotFound/>}
        />
      </Routes>
    </BrowserRouter>
  );
}
