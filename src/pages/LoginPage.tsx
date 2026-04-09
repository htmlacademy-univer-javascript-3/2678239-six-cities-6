import Logo from '../components/Logo.tsx';
import {FormEvent, useEffect, useState} from 'react';
import {authorizeAction} from '../store/apiActions.ts';
import {useAppDispatch, useAppSelector} from '../hooks/store.ts';
import {AppRoute, AuthorizationStatus} from '../types/app.ts';
import {Link, useNavigate} from 'react-router-dom';

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const authStatus = useAppSelector((state) => state.authorizationStatus);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(authorizeAction({email, password}));
  };

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Root);
    }
  }, [authStatus, navigate]);

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" onSubmit={(event) => onSubmit(event)}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" value={email} data-test-id="login-input"
                  onChange={(event) => setEmail(event.target.value)} placeholder="Email" required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" value={password} data-test-id="password-input"
                  onChange={(event) => setPassword(event.target.value)} placeholder="Password" required
                />
              </div>
              <button className="login__submit form__submit button" data-test-id="submit-button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Root}>
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
