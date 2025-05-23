import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks';
import { getFavoriteCount } from 'store/slices/offer-slice/selectors';
import { logoutAction } from 'store/api-actions';
import { AppRoute } from 'const';


type SignOutProps = {
  email: string;
}

function SignOut({ email }: SignOutProps) {
  const dispatch = useAppDispatch();

  const favoriteCount = useAppSelector(getFavoriteCount);

  const handleClick = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();

    dispatch(logoutAction());
  };

  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__user-name user__name">{email}</span>
          <span className="header__favorite-count">{favoriteCount}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link className="header__nav-link" onClick={handleClick} to={''}>
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </ul>
  );
}


export default SignOut;

