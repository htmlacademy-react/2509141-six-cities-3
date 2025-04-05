import styles from './not-found.module.css';
import { Link } from 'react-router-dom';


function NotFound() {
  return (
    // ❔ Корректное использование .module.css?
    <div className={styles.notFound}>
      <Link className="page__logo-link" to="/">
        <img className="page__logo" src="img/not-found.png" alt="6 cities logo"/>
      </Link>
    </div>
  );
}


export default NotFound;
