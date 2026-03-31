import {SortTypes} from '../../types/sort.ts';
import {useState} from 'react';
import {SortTypeNames} from '../../const.ts';

type CardSortProps = {
  onClick: (type: SortTypes) => void;
  selectedSort: SortTypes;
}

export default function CardsSort({onClick, selectedSort}: CardSortProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setIsOpen(!isOpen)}>
        {SortTypeNames.get(selectedSort)}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}>
        {Array.from(SortTypeNames.entries()).map(([type, title]) => (
          <li
            key={type}
            onClick={() => onClick(type)}
            className={`places__option ${selectedSort === type ? 'places__option--active' : ''}`}
            tabIndex={0}
          >
            {title}
          </li>
        ))}
      </ul>
    </form>
  );
}
