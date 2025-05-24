import { Link } from 'react-router-dom';
import { getRandomCityName } from 'utils/util';
import { AppRoute } from 'const';


function RandomCity() {
  const city = getRandomCityName();

  return (
    <section className="locations locations--login locations--current">
      <div className="locations__item">
        <Link className="locations__item-link" to={{
          pathname: AppRoute.Root,
          search: `?city=${city}`
        }}
        >
          <span>{city}</span>
        </Link>
      </div>
    </section>
  );
}


export default RandomCity;

