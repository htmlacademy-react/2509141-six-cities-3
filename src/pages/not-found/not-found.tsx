import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AppRoute } from 'const';
import styles from './not-found.module.css';


function NotFound() {
  return (
    <div className={styles.notFound}>
      <Helmet>
        <title>Not Found</title>
      </Helmet>

      <Link className="page__logo-link" to={AppRoute.Root}>
        <img className="page__logo" src="img/not-found.png" alt="6 cities logo"/>
      </Link>
    </div>
  );
}


export default NotFound;
