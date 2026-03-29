import Logo from '../components/Logo.tsx';
import OffersList from '../components/cards/OffersList.tsx';
import Map from '../components/Map.tsx';
import CitiesList from '../components/CitiesList.tsx';
import {useAppDispatch, useAppSelector} from '../hooks/store.ts';
import {setCity} from '../state/action.ts';
import {filterOffersByCity} from '../utils.ts';
import MainEmptyPage from './MainEmptyPage.tsx';
import CardsSort from '../components/cards/CardsSort.tsx';


export default function MainPage() {
  const dispatch = useAppDispatch();
  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const offersByCity = filterOffersByCity(offers, city);

  if (offersByCity.length === 0) {
    return <MainEmptyPage />;
  }

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList selectedCity={city} onClick={(value) => dispatch(setCity(value))} />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersByCity.length} places to stay in {city}</b>
              <CardsSort />
              <OffersList offers={offersByCity}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map" style={{ backgroundImage: 'none' }}>
                <Map mapCenter={offersByCity[0].location} points={offersByCity} selectedPoint={null}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
