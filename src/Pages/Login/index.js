import React, { useState, useContext } from 'react';
import Footer from '../../Components/Footer';
import { AuthContext } from 'context/auth';
import { CardLogin, MainContainer } from './styles';
import HeaderLogin from 'Components/Header/HeaderLogin';

// import { Container } from './styles';

const Login = () => {
  const { textError, login } = useContext(AuthContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();    
    login(email, password)
  }
  return (
    <>
      <HeaderLogin />
      <MainContainer>
        <CardLogin>
          <h1>
            Para continuar, digite o seu e-mail.
          </h1>          

          <form onSubmit={handleSubmit}>
            <div>
              <label>E-mail</label>
              <input type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label>Senha</label>
              <input type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button type='submit'>
                <span>Continuar</span>
              </button>
              <p>{String(textError)}</p>
              <p>
                <span>
                  Para acessar utilize. <br />
                  E-mail : bruno@teste.com <br />
                  Senha: 1234!
                </span>
              </p>
            </div>

          </form>
        </CardLogin>
      </MainContainer>
      <Footer />
    </>
  );
}

export default Login;