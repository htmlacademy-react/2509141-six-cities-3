import SignIn from 'components/sign-in/sign-in';
import SignOut from 'components/sign-out/sign-out';
import { useAppSelector } from 'hooks';
import { getEmail } from 'store/slices/user-slice/selectors';


function HeaderNav() {
  const email = useAppSelector(getEmail);

  return (
    <ul className="header__nav-list">
      {email
        ? <SignOut email={email} />
        : <SignIn />}
    </ul>
  );
}


export default HeaderNav;

