import OfferCard from './OfferCard.tsx';
import {Offer} from '../../types/offer.ts';
import {useState} from 'react';

type CardListProps = {
  offers: Offer[];
  isNeighbour?: boolean;
}


export default function OffersList({offers, isNeighbour = false} : CardListProps) {
  const [, setActiveOfferId] = useState<string | null>(null);

  const containerClassName = isNeighbour
    ? 'near-places__list'
    : 'cities__places-list tabs__content';


  return (
    <div className={`${containerClassName} places__list`}>
      {offers.map((offer) => <OfferCard key={offer.id} offer={offer} isNeighbour={isNeighbour} onHover={() => setActiveOfferId(offer.id)}/>)}
    </div>
  );
}
