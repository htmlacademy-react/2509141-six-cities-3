import { CityName } from 'const';
import { Link } from 'react-router-dom';


type CityLinkProps = {
  name: CityName;
  activeCity: CityName;
  onClick: (name: CityName) => void;
}

function CityLink({name, activeCity, onClick}: CityLinkProps) {
  const handleCityClick = () => {
    onClick(name);
  };

  return(
    <li className="locations__item">
      <Link className={`locations__item-link tabs__item ${name === activeCity ? 'tabs__item--active' : ''}`} to="/" onClick={handleCityClick}>
        <span>{name}</span>
      </Link>
    </li>
  );
}


export default CityLink;
