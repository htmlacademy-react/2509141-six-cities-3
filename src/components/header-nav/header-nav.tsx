import { memo } from 'react';
import { Link } from 'react-router-dom';
import { getEmail } from 'store/slices/user-slice/selectors';
import { AppRoute } from 'const';
import { useAppSelector } from 'hooks';
import SignIn from './sign-in/sign-in';
import SignOut from './sign-out/sign-out';


function HeaderNav() {
  const email = useAppSelector(getEmail);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={AppRoute.Root}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <ul className="header__nav-list">
            {email
              ? <SignOut email={email} />
              : <SignIn />}
          </ul>
        </div>
      </div>
    </header>
  );
}


export const MemoHeaderNav = memo(HeaderNav);

