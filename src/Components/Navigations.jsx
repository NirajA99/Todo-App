import React, { useContext} from 'react';
import { Link, NavLink, useNavigate} from 'react-router-dom';
import AuthContext from '../Context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLightbulb } from '@fortawesome/free-regular-svg-icons';

// import LogIn from './LogIn';
function Navigations(props) {
  const {user ,setUser} = useContext(AuthContext);
  const navigate = useNavigate();
  //useEffect(callback-function & dependencies)
  const logout=()=>{
    localStorage.removeItem("user");
    setUser('');
    navigate('/');
    
  }
 
  
    return (
        
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" >
    
  <div className="container-fluid">
    <Link className="navbar-brand" to=""><FontAwesomeIcon icon={faLightbulb} fade style={{color: "#dbdbdb",}} /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {
          !user?
        <>
        <li className="nav-item">
          <NavLink className={`nav-link ${({ isActive }) =>
      isActive ? "active" : "" }}`}aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink> 
        </li>
        </>
          :
          <>       
          <li className="nav-item">
          <NavLink className="nav-link" to="/profile">{user?.name}</NavLink> 
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/createtask">CreateTask</NavLink> 
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/tasklist">TaskList</NavLink> 
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink> 
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  onClick={logout}>Logout</NavLink> 
        </li>
        </>
          }
      </ul>
    </div>
  </div>
</nav>
    
    );
}

export default Navigations;