import {SortTypes} from '../../types/sort.ts';
import {useState} from 'react';
import {SortTypeNames} from '../../const.ts';

type CardSortProps = {
  onClick: (type: SortTypes) => void;
}

export default function CardsSort({onClick}: CardSortProps) {
  const [selectedSort, setSelectedSort] = useState<SortTypes>(SortTypes.Popular);

  const handleClick = (type: SortTypes) => {
    setSelectedSort(type);
    onClick(type);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
                  Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {Array.from(SortTypeNames.entries()).map(([type, title]) => (
          <li
            key={type}
            onClick={() => handleClick(type)}
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
