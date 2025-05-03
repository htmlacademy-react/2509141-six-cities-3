import SignIn from 'components/sign-in/sign-in';
import SignOut from 'components/sign-out/sign-out';
import { useAppSelector } from 'hooks';


function HeaderNav() {
  const email = useAppSelector((state) => state.email);

  return (
    <ul className="header__nav-list">
      {email
        ? <SignOut email={email} />
        : <SignIn />}
    </ul>
  );
}


export default HeaderNav;

