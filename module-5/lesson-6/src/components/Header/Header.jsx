import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header className="shadow-lg">
        <div className="container">
       <div className="d-flex justify-content-between align-items-center w-100">
       <NavLink to="/" className='text-decoration-none'>LOGO</NavLink>
          <nav className="nav d-flex justify-content-between align-items-center p-3 w-50">
            <ul className="w-100 d-flex justify-content-between list-unstyled">
              <li> 
                <NavLink to="/" className='text-decoration-none'>Character</NavLink>
              </li>
              <li>
                <NavLink to="/episode" className='text-decoration-none'>Episode</NavLink>

              </li>
              <li>
              <NavLink to="/location" className='text-decoration-none'>Location</NavLink>

              </li>
            </ul>
          </nav>
       </div>
        </div>
      </header>
    </>
  );
};
