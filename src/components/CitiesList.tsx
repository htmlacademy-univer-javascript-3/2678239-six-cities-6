import {CITIES} from '../const.ts';


type CitiesListProps = {
  selectedCity: string;
  onClick: (cityName: string) => void;
}

export default function CitiesList ({selectedCity, onClick}: CitiesListProps) {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <li key={city} className="locations__item">
              <a className={`locations__item-link tabs__item ${selectedCity === city ? 'tabs__item--active' : ''}`}
                href="#"
                onClick={(evt) => {
                  evt.preventDefault();
                  onClick(city);
                }}
              >
                <span>{city}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
