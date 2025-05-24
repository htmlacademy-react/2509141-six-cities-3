import { Helmet } from 'react-helmet-async';
import { Navigate } from 'react-router-dom';
import { FormEvent, useRef } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { loginAction } from 'store/api-actions';
import { AppRoute, AuthorizationStatus } from 'const';
import { getAuthStatus } from 'store/slices/user-slice/selectors';
import RandomCity from 'components/random-city/random-city';
import Logo from 'components/header-nav/logo/logo';


function Login() {
  const dispatch = useAppDispatch();

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);


  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value
      }));
    }
  };


  const authorizationStatus = useAppSelector(getAuthStatus);
  return (authorizationStatus === AuthorizationStatus.Auth)
    ? <Navigate to={AppRoute.Root} />
    : (
      <div className="page page--gray page--login">
        <Helmet>
          <title>Login</title>
        </Helmet>

        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <Logo />
            </div>
          </div>
        </header>

        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>

              <form className="login__form form" onSubmit={handleSubmit}>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input ref={loginRef} className="login__input form__input" type="email" name="email" placeholder="Email" required/>
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input ref={passwordRef} className="login__input form__input" type="password" name="password" placeholder="Password" required/>
                </div>
                <button className="login__submit form__submit button" type="submit">Sign in</button>
              </form>

            </section>
            <RandomCity />
          </div>
        </main>
      </div>
    );
}

export default Login;
