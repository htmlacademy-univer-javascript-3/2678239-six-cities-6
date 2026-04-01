import Logo from '../components/Logo.tsx';
import ReviewForm from '../components/reviews/ReviewForm.tsx';
import {useParams} from 'react-router-dom';
import {detailedOffers} from '../mocks/offers.ts';
import PageNotFound from './PageNotFound.tsx';
import ReviewsList from '../components/reviews/ReviewsList.tsx';
import {Comment} from '../types/comment.ts';
import Map from '../components/Map.tsx';
import {MAX_NEIGHBOUR_POINTS} from '../const.ts';
import OffersList from '../components/cards/OffersList.tsx';
import {filterOffersByCity, findItemById} from '../utils/utils.ts';
import {useAppSelector} from '../hooks/store.ts';

type OfferPageProps = {
  comments: Comment[];
}

export default function OfferPage({comments}: OfferPageProps) {
  const offers = useAppSelector((state) => state.offers);
  const city = useAppSelector((state) => state.city);
  const offersByCity = filterOffersByCity(offers, city);
  const neighbourPoints = offersByCity.slice(0, MAX_NEIGHBOUR_POINTS);

  const selectedOffer = useAppSelector((state) => state.selectedOffer);
  const params = useParams();
  const offerId = params.id;
  const detailedOffer = offerId && findItemById(detailedOffers, offerId);
  if (!detailedOffer) {
    return (<PageNotFound />);
  }
  return (
    <div className="page">
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

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {detailedOffer.images.map((image) => (
                <div key={image} className="offer__image-wrapper">
                  <img className="offer__image" src={image} alt="Photo studio"/>
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {detailedOffer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {detailedOffer.title}
                </h1>
                <button className={`offer__bookmark-button ${detailedOffer.isFavorite ? 'offer__bookmark-button--active' : ''} button`} type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">{detailedOffer.isFavorite ? 'In' : 'To'} bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: `${Math.floor(detailedOffer.rating) * 20}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{detailedOffer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {detailedOffer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {detailedOffer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                Max {detailedOffer.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{detailedOffer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {detailedOffer.goods.map((good) => (
                    <li key={good} className="offer__inside-item">
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className={`offer__avatar-wrapper ${detailedOffer.host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                    <img className="offer__avatar user__avatar" src={detailedOffer.host.avatarUrl} width="74" height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">
                    {detailedOffer.host.name}
                  </span>
                  {detailedOffer.host.isPro && (
                    <span className="offer__user-status">
                      Pro
                    </span>
                  )}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {detailedOffer.description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
                <ReviewsList comments={comments} />
                <ReviewForm />
              </section>
            </div>
          </div>
          <section className="offer__map map" style={{ backgroundImage: 'none' }}>
            <Map mapCenter={neighbourPoints[0].location} points={neighbourPoints} selectedPoint={selectedOffer}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OffersList offers={neighbourPoints} isNeighbour />
          </section>
        </div>
      </main>
    </div>
  );
}
