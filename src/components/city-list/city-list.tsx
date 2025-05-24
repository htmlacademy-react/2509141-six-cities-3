import CityLink from 'components/city-link/city-link';
import { CityName } from 'const';


type CityListProps = {
  activeCity: CityName;
}

function CityList({ activeCity }: CityListProps) {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.values(CityName).map((name) => <CityLink name={name} activeCity={activeCity} key={name} />)}
        </ul>
      </section>
    </div>
  );
}


export default CityList;
