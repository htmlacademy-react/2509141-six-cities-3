type CityLinkProps = {
  name: string;
  activeCity: string;
}

function CityLink({name, activeCity}: CityLinkProps) {
  return(
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${name === activeCity ? 'tabs__item--active' : ''}`} href="#">
        <span>{name}</span>
      </a>
    </li>
  );
}


export default CityLink;
