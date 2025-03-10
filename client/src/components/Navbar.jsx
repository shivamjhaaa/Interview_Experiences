import React from 'react'
import { useContext } from 'react'
import {Link} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import Logo from "../img/Logo.png"
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {

  const {currentUser, logout} = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        
   

        <div className="links">
          <span>{currentUser?.name}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="login">
              Login
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar