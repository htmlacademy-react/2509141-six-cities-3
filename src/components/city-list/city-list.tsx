import CityLink from 'components/city-link/city-link';
import { CityName } from 'const';


type CityListProps = {
  activeCity: CityName;
  onClick: (name: CityName) => void;
}

//TODO: ?city=Paris
function CityList({activeCity, onClick}: CityListProps) {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.values(CityName).map((name) => <CityLink name={name} activeCity={activeCity} key={name} onClick={onClick} />)}
        </ul>
      </section>
    </div>
  );
}


export default CityList;
