import { Link } from 'react-router-dom';
import { AppRoute, CityName } from 'const';


type CityLinkProps = {
  name: CityName;
  isActive: boolean;
}

function CityLink({ name, isActive }: CityLinkProps) {
  return (
    <li className="locations__item">
      <Link
        className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`}
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
