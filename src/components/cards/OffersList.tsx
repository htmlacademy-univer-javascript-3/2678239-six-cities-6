import OfferCard from './OfferCard.tsx';
import {Offer} from '../../types/offer.ts';
import {useDispatch} from 'react-redux';
import {selectOffer} from '../../state/action.ts';

type CardListProps = {
  offers: Offer[];
  isNeighbour?: boolean;
}


export default function OffersList({offers, isNeighbour = false} : CardListProps) {
  const dispatch = useDispatch();

  const containerClassName = isNeighbour
    ? 'near-places__list'
    : 'cities__places-list tabs__content';


  return (
    <div className={`${containerClassName} places__list`}>
      {offers.map((offer) => <OfferCard key={offer.id} offer={offer} isNeighbour={isNeighbour} onHover={() => dispatch((selectOffer(offer)))}/>)}
    </div>
  );
}
