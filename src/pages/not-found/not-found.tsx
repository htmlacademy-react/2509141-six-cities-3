import './not-found.css';
import { Link } from 'react-router-dom';


function NotFound(): JSX.Element {
  return (
    <div className="page page--gray page--not-found">
      <Link className="page__logo-link" to="/">
        <img className="page__logo" src="img/not-found.png" alt="6 cities logo"/>
      </Link>
    </div>
  );
}


export default NotFound;
