import { Link } from 'react-router-dom';
import { AppRoute, CityName } from 'const';


type CityLinkProps = {
  name: CityName;
  activeCity: CityName;
}

function CityLink({ name, activeCity }: CityLinkProps) {
  return (
    <li className="locations__item">
      <Link
        className={`locations__item-link tabs__item ${name === activeCity ? 'tabs__item--active' : ''}`}
        to={{
          pathname: AppRoute.Root,
          search: `?city=${name}`
        }}
      >
        <span>{name}</span>
      </Link>
    </li>
  );
}


export default CityLink;
