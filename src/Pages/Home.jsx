import React from 'react';
import pic from '../Gallery/illustration.png';
import { NavLink, Outlet } from 'react-router-dom';
function Home() {
    return (
        <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="col-md-6 bg-primary text-white text-center h-100 d-flex flex-column align-items-center justify-content-center">
            <h1 className="title">
              An App to <br />
              make your life
              <br />
              <span className="text-uppercase display-1">easy</span>
            </h1>
            <img src={pic} alt="picture" />
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div className="card home-card w-50 shadow-sm rounded-0">
              <div className={`card-header d-flex p-0 text-center border-0 bg-white nav-link ${({ isActive }) =>
            isActive ? "active" : "" }}`} aria-current='page'>
              <NavLink className='w-50 nav-link active' aria-current='page' to='/login'>Log In</NavLink>
              <NavLink className='w-50 nav-link active' aria-current='page' to='/Register'>Registration</NavLink>
              </div>
              <div className="card-body p-4">
                <Outlet />
              </div>
              
            </div>            
          </div>
        </div>
        </div>

    );
}

export default Home;
