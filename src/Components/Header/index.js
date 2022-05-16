import React, { useContext } from 'react';
import { AuthContext } from 'context/auth';

import { HiOutlineLogout } from "react-icons/hi"
import { HeaderContainerLog } from './styles';
import Logo from "assets/img/logo-mercado-livre.png"
import { Link } from 'react-router-dom';

function Header() {
  const { logout } = useContext(AuthContext)

  const handleLogout = () => {
    logout();
  }

  return (
    <HeaderContainerLog>
      <div>
        <Link to="/login"><img src={Logo} alt="Logo Mercado Livre" /></Link>

        <button type='button'
          onClick={handleLogout}
        >Sair <span><HiOutlineLogout /></span></button>
      </div>
    </HeaderContainerLog>
  );
}

export default Header;