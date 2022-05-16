import React from 'react';

import { HeaderContainer } from './styles';
import Logo from "assets/img/logo-mercado-livre.png"

function HeaderLogin() {
  return (
    <HeaderContainer>
      <div>
        <img src={Logo} alt="Logo Mercado Livre"/>
      </div>
      
    </HeaderContainer>
  );
}

export default HeaderLogin;