import {Offer} from '../../types/offer.ts';
import FavoriteCard from './FavoriteCard.tsx';

type FavoriteCardProps = {
  offers: Offer[];
}


export default function FavoritesList({offers}: FavoriteCardProps) {
  const groupedOffersMap: Map<string, Offer[]> = new Map();
  for (const offer of offers) {
    if (groupedOffersMap.has(offer.city.name)) {
      groupedOffersMap.get(offer.city.name)?.push(offer);
    } else {
      groupedOffersMap.set(offer.city.name, [offer]);
    }
  }
  const groupedOffersArray = Array.from(groupedOffersMap.entries());

  return (
    <ul className="favorites__list">
      {groupedOffersArray.map(([city, offersGroup]) => (
        <li className="favorites__locations-items" key={city}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{city}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {offersGroup.map((offer) => (<FavoriteCard key={offer.id} offer={offer}/>))}
          </div>
        </li>
      ))}
    </ul>
  );
}
