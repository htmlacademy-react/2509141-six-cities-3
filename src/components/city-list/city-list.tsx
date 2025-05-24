import { memo } from 'react';
import { CityName } from 'const';
import CityLink from './city-link/city-link';


type CityListProps = {
  activeCity: CityName;
}

function CityList({ activeCity }: CityListProps) {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.values(CityName).map((name) => <CityLink name={name} isActive={name === activeCity} key={name} />)}
        </ul>
      </section>
    </div>
  );
}

export const MemoCityList = memo(CityList);
