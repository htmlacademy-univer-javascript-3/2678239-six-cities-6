import OffersList from '../components/cards/OffersList.tsx';
import Map from '../components/Map.tsx';
import CitiesList from '../components/CitiesList.tsx';
import {useAppDispatch, useAppSelector} from '../hooks/store.ts';
import {setCity, setSort} from '../store/action.ts';
import MainEmptyPage from './MainEmptyPage.tsx';
import CardsSort from '../components/cards/CardsSort.tsx';
import {filterOffersByCity} from '../utils/utils.ts';
import {sortOffers} from '../utils/sort.ts';
import '../../markup/css/spinner.css';
import {useEffect} from 'react';
import {loadOffersAction} from '../store/apiActions.ts';
import Header from '../components/Header.tsx';

export default function MainPage() {
  const sortType = useAppSelector((state) => state.sortType);
  const selectedOffer = useAppSelector((state) => state.selectedOffer);
  const isOffersLoading = useAppSelector((state) => state.isOffersLoading);

  const dispatch = useAppDispatch();
  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const offersByCity = filterOffersByCity(offers, city);
  const sortedOffers = sortOffers(offersByCity, sortType);

  useEffect(() => {
    dispatch(loadOffersAction());
  }, [dispatch]);

  if (!isOffersLoading && offersByCity.length === 0) {
    return <MainEmptyPage />;
  }

  return (
    <div className="page page--gray page--main">
      <Header />
      {isOffersLoading
        ? <span className='loader'/>
        :
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>

          <CitiesList selectedCity={city} onClick={(value) => dispatch(setCity(value))}/>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offersByCity.length} places to stay in {city}</b>
                <CardsSort selectedSort={sortType} onClick={(type) => dispatch(setSort(type))}/>
                <OffersList offers={sortedOffers}/>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map" style={{ backgroundImage: 'none' }}>
                  <Map mapCenter={selectedOffer?.location || offersByCity[0].location} points={offersByCity} selectedPoint={selectedOffer}/>
                </section>
              </div>
            </div>
          </div>
        </main>}
    </div>
  );
}
