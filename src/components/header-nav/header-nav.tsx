import { memo } from 'react';
import { getEmail } from 'store/slices/user-slice/selectors';
import { useAppSelector } from 'hooks';
import SignIn from './sign-in/sign-in';
import SignOut from './sign-out/sign-out';
import Logo from './logo/logo';


function HeaderNav() {
  const email = useAppSelector(getEmail);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
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

