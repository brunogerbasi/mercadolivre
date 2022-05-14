import React from 'react';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import { CardLogin, MainContainer } from './styles';

// import { Container } from './styles';

function Login() {
  return (
    <>
      <Header />
      <MainContainer>
        <CardLogin>
          <h1>
            Para continuar, digite o seu e-mail.
          </h1>

          <form>
            <div>
              <label>E-mail</label>
              <input type="email" />
            </div>
            <div>
              <label>Senha</label>
              <input type="password" />
            </div>
            <div>
              <button type='button'>
                <span>Continuar</span>
              </button>
            </div>

          </form>
        </CardLogin>
      </MainContainer>
      <Footer />
    </>
  );
}

export default Login;